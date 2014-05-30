<?php

namespace Onepagr\TemplateBundle\Content\Mapper\FileMapper;

/**
 * 
 */
class ContentFileMapper extends AbstractFileMapper {

	
	public function save() {
		$path = $this->getDataPath();
		if($this->getEntities()) {
			foreach($this->getEntities() AS $entity) {
				$filePath = $path . '/' . $entity->getName() . '.json';
				$content = $this->getSeriliazer()->serialize($entity->getData(), 'json'); 
				file_put_contents($filePath, $content);
			}
		}
	}
	
		public function load() {
		$path = $this->getDataPath();
		if($this->getEntities()) {
			foreach($this->entities AS $key => $entity) {
				$filePath = $path . '/' . $entity->getName() . '.json';
				if(file_exists($filePath)) {
					$data = (array) $this->getSeriliazer()->decode(file_get_contents($filePath), 'json'); 
					$this->entities[$key]->setData($data);
				}
				
			}
		}
		return $this->entities;
	}
	
	private function getDataPath() {
		$dir = $this->getDir();
		if(!file_exists($dir)) {
			if(!mkdir($dir)) {
				throw new Exception('Profile directory does not exist and cannot create one : ' . $dir);
			}
		}
		
		$dir = $this->getDir() . '/' . $this->getUserId();
		if(!file_exists($dir)) {
			if(!mkdir($dir)) {
				throw new Exception('User directory does not exist and cannot create one : ' . $dir);
			}
		}
		
		$dir = $this->getDir() . '/' . $this->getUserId() . '/pages';
		if(!file_exists($dir)) {
			if(!mkdir($dir)) {
				throw new Exception('Pages directory does not exist and cannot create one : ' . $dir);
			}
		}
		
		$dir = $dir . '/' . $this->getPage();
		if(!file_exists($dir)) {
			if(!mkdir($dir)) {
				throw new Exception('Page directory does not exist and cannot create one : ' . $dir);
			}
		}

		$dir = $dir . '/data/';
		if(!file_exists($dir)) {
			if(!mkdir($dir)) {
				throw new Exception('Data directory does not exist and cannot create one : ' . $dir);
			}
		}
		return $dir;
	}

}
