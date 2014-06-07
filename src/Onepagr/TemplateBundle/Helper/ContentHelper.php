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
	
	public function  prependBaseUrl($palette) {
		$baseUrl = $this->getBaseUrl();
		if($baseUrl && $palette) {
			foreach($palette AS $key => $value) {
				if(is_string($value)) {
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
                        $options['output_file'] = $content['id'] . '.' . $key . '_'  . $paetteKey . '.style.css';
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

        $contentSectionMap = $this->entities['contentSectionMap']->getData();
        $contents = $this->entities['content']->getData();
        $settings = $this->entities['setting']->getData();


        $css = $this->getViewCss(array('vars' => $palette), $palette['key']);
        // print_r($palette);
        $viewData = array(
            'css' => $css[0],
            'sections' => array(),
            'contents' => $contents,
            'settings' => $settings
        );

        foreach ($contentSectionMap AS $key => $value) {
            $viewData['sections'][$key] = $value;

            $viewData['sections'][$key]['content'] = $contents[$value['contentId']];
            // $viewData['sections'][$key]['template'] = $contents[$value['contentId']][''];
        }

        return $viewData;
    }

}
