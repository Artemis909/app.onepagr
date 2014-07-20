<?php

namespace Onepagr\TemplateBundle\Helper;

/**
 * 
 */
class ContentHelper {

	/**
	 *
	 * @var type 
	 */
	protected $profileDir;

	/**
	 * 
	 * @return type
	 */
	protected $cssTemplateDir;

	/**
	 *
	 * @var type 
	 */
	protected $entities;
	protected $baseUrl;

	/**
	 *
	 * @var type 
	 */
	protected $indexDir;

	public function getBaseUrl() {
		return $this->baseUrl;
	}

	public function setBaseUrl($baseUrl) {
		$this->baseUrl = $baseUrl;
	}

	public function getEntities() {
		return $this->entities;
	}

	public function setEntities($entities) {
		$this->entities = $entities;
	}

	public function getCssTemplateDir() {
		return $this->cssTemplateDir;
	}

	public function setCssTemplateDir($cssTemplateDir) {
		$this->cssTemplateDir = $cssTemplateDir;
		return $this;
	}

	public function getProfileDir() {
		return $this->profileDir;
	}

	public function setProfileDir($profileDir) {
		$this->profileDir = $profileDir;
		return $this;
	}

	public function getIndexDir() {
		return $this->indexDir;
	}

	public function setIndexDir($indexDir) {
		$this->indexDir = $indexDir;
		return $this;
	}

	public function getPalette($paletteKey) {
		$palettes = $this->entities['palette']->getData();



		if ($paletteKey && isset($palettes[$paletteKey])) {
			$return = $palettes[$paletteKey];
			$return['key'] = $paletteKey;
		} else {
			$return = reset($palettes);
			$return['key'] = key($palettes);
		}

		return $this->prependBaseUrl($return);
	}

	public function prependBaseUrl($palette) {
		$baseUrl = $this->getBaseUrl();
		if ($baseUrl && $palette) {
			foreach ($palette AS $key => $value) {
				if (is_string($value)) {
					$palette[$key] = str_replace("##baseUrl##", $baseUrl, $value);
				}
			}
		}
		return $palette;
	}

	public function getViewCss($options, $paetteKey) {

		$contents = $this->entities['content']->getData();
		$settings = $this->entities['setting']->getData();

		$return = array();
		foreach ($contents AS $content) {
			if (isset($content['templateCss']) && (is_array($content['templateCss']) && $content['templateCss'])) {

				foreach ($content['templateCss'] AS $key => $cssTemplateSource) {
					$cssTemplateSource = $this->getCssTemplateDir() . '/' . $cssTemplateSource;
					if (file_exists($cssTemplateSource)) {
						// echo $cssTemplateSource;

						$cssTemplate = $this->getProfileDir() . '/' . $settings['userId'] . '/pages/' . $settings['page'] . '/assets/css/' . $content['id'] . '.' . $key . '.template.css';

						copy($cssTemplateSource, $cssTemplate);

						$outputDir = $this->getProfileDir() . '/' . $settings['userId'] . '/pages/' . $settings['page'] . '/assets/css/';
						$assetDir = $this->getProfileDir() . '/' . $settings['userId'] . '/pages/' . $settings['page'] . '/assets/img/';
						$options['output_dir'] = $outputDir;
						$options['asset_dir'] = $assetDir;
						$options['output_file'] = $content['id'] . '.' . $key . '_' . $paetteKey . '.style.css';
						// $options['rewrite_import_urls'] = false;
						// print_r($options);
						$return[] = csscrush_file($cssTemplate, $options);
					}
				}
			}
		}
		// csscrush_file($file
		return $return;
	}

	public function cacheIndex($content, $domain) {
		$dir = $this->getIndexDir() . '/' . $domain;
		$path = $dir . '/index.html';
		if (!file_exists($dir)) {

			if (!@mkdir($dir, 0777, true)) {
				// echo $dir;
			}
		}

		if (file_exists($dir)) {
			file_put_contents($path, $content);
		}
	}

	public function getViewData($palette) {

		$contentSectionMap = $this->entities['contentSectionMap']->getData();
		$contents = $this->entities['content']->getData();
		$settings = $this->entities['setting']->getData();


		$css = $this->getViewCss(array('vars' => $palette), $palette['key']);
		// print_r($palette);
		$viewData = array(
			'css' => $css[0],
			'cssList' => $css,
			'sections' => array(),
			'contents' => $contents,
			'settings' => $settings,
			'baseUrl' => $this->getBaseUrl()
		);

		foreach ($contentSectionMap AS $key => $value) {
			$viewData['sections'][$key] = $value;

			$viewData['sections'][$key]['content'] = $contents[$value['contentId']];
			if (isset($viewData['sections'][$key]['content']['data']) && ($viewData['sections'][$key]['content']['data'])) {
				$viewData['sections'][$key]['content']['data'] = $this->updateUrl($viewData['sections'][$key]['content']['data'], $viewData['baseUrl']);
			}

			if (isset($viewData['sections'][$key]['content']['listId'])) {
				$listId = $viewData['sections'][$key]['content']['listId'];
				if (isset($contents['__lists'][$listId])) {
					$contents['__lists'][$listId]['items'] = $this->updateUrl($contents['__lists'][$listId]['items'], $viewData['baseUrl']);
					$viewData['sections'][$key]['content']['list'] = $contents['__lists'][$listId];
				}
			}
			// $viewData['sections'][$key]['template'] = $contents[$value['contentId']][''];
		}



		return $viewData;
	}

	public function updateUrl($list, $url) {
		
		if ($list && is_array($list)) {
			foreach ($list AS $dataKey => $data) {
				if (is_string($data)) {
					$list[$dataKey] = str_replace('##baseUrl##', $url, $data);
				} else if(is_array($data)) {
					$list[$dataKey] = $this->updateUrl($data, $url);
				}
			}
		}
		return $list;
	}

}
