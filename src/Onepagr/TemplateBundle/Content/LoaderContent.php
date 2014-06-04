<?php

namespace Onepagr\TemplateBundle\Content;

/**
 * 
 */
class LoaderContent {

	/**
	 *
	 * @var type 
	 */
	protected $data;

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

	public function getData() {
		return $this->data;
	}

	public function setData($data) {
		$this->data = $data;
		return $this;
	}

	public function load($name) {
		$file = __DIR__ . '/../Resources/examples/' . $name . '.php';
		$data = require $file;
		$this->setData($data);
		return $data;
	}

	public function getContents() {
		return $this->data['contents'];
	}

	public function getSettings() {
		return $this->data['settings'];
	}

	public function getPalette($palette) {
		$palettes = $this->data['palettes'];
		if (null === $palette) {
			return reset($palettes);
		}

		if (isset($palettes[$palette])) {
			return $palettes[$palette];
		}
		return reset($palettes);
	}


	

	public function getViewCss($options) {

		$data = $this->getData();
		$return = array();
		foreach ($data['contents'] AS $content) {
			if (isset($content['templateCss']) && (is_array($content['templateCss']) && $content['templateCss'])) {

				foreach ($content['templateCss'] AS $key => $cssTemplateSource) {
					$cssTemplateSource = $this->getCssTemplateDir() . '/' . $cssTemplateSource;
					if (file_exists($cssTemplateSource)) {
						// echo $cssTemplateSource;
						
						$cssTemplate = $this->getProfileDir() . '/' . $data['settings']['userId'] . '/pages/' . $data['settings']['page'] . '/assets/css/' . $content['id'] . '.' . $key . '.template.css';
						
						copy($cssTemplateSource, $cssTemplate);
						
						$outputDir = $this->getProfileDir() . '/' . $data['settings']['userId'] . '/pages/' . $data['settings']['page'] . '/assets/css/';
						$assetDir = $this->getProfileDir() . '/' . $data['settings']['userId'] . '/pages/' . $data['settings']['page'] . '/assets/img/';
						$options['output_dir'] = $outputDir;
						$options['asset_dir'] = $assetDir;
						$options['output_file'] = $content['id'] . '.' . $key . '.style.css';
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

	public function getViewData($palette) {

		$sectionContentMap = $this->data['sectionContentMap'];
		$contents = $this->data['contents'];
		$settings = $this->data['settings'];



		$css = $this->getViewCss(array('vars' => $palette));
		// print_r($palette);
		$viewData = array(
			'css' => $css[0],
			'sections' => array(),
			'contents' => $contents,
			'settings' => $settings
		);

		foreach ($sectionContentMap AS $key => $value) {
			$viewData['sections'][$key] = $value;
			
			$viewData['sections'][$key]['content'] = $contents[$value['contentId']];
			// $viewData['sections'][$key]['template'] = $contents[$value['contentId']][''];
		}

		return $viewData;
	}

}
