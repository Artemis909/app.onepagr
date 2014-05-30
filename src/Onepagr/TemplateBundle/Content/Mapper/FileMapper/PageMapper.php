<?php

namespace Onepagr\TemplateBundle\Content\Mapper\FileMapper;

/**
 * 
 */
class PageMapper extends AbstractFileMapper {

	public function save() {
		return $this->getDataPath();
	}

	private function getDataPath() {
		$dir = $this->getDir() . '/' . $this->getUserId();
		$dirs = array();
		$dirs[] = $dir . '/media/img/';
		$dirs[] = $dir . '/media/video/';

		$dirs[] = $dir . '/pages/' . $this->getPage() . '/assets/css/';
		$dirs[] = $dir . '/pages/' . $this->getPage() . '/assets/img/';
		$dirs[] = $dir . '/pages/' . $this->getPage() . '/assets/js/';
		foreach ($dirs AS $dir) {
			if (!file_exists($dir)) {

				if(!@mkdir($dir, 0777, true)) {
					echo $dir;
				}
			}
		}
	}

}
