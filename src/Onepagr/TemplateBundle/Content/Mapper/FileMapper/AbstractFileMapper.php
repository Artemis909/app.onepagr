<?php

namespace Onepagr\TemplateBundle\Content\Mapper\FileMapper;

use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Onepagr\TemplateBundle\Content\Entity\AbstractEntity;

/**
 * 
 */
abstract class AbstractFileMapper {

	/**
	 *
	 * @var Serializer 
	 */
	protected $seriliazer;

	/**
	 *
	 * @var string 
	 */
	protected $userId;

	/**
	 *
	 * @var string 
	 */
	protected $page;

	/**
	 *
	 * @var array 
	 */
	protected $entities;

	/**
	 *
	 * @var string 
	 */
	protected $dir;

	public function __construct() {
		
	}

	/**
	 * 
	 * @return Serializer
	 */
	public function getSeriliazer() {
		if (null === $this->seriliazer) {

			$encoders = array(new XmlEncoder(), new JsonEncoder());
			$normalizers = array(new GetSetMethodNormalizer());

			$this->seriliazer = new Serializer($normalizers, $encoders);
		}
		return $this->seriliazer;
	}

	public function setSeriliazer(Serializer $seriliazer) {
		$this->seriliazer = $seriliazer;
	}

	public function getUserId() {
		return $this->userId;
	}

	public function getPage() {
		return $this->page;
	}

	public function getEntities() {
		return $this->entities;
	}

	public function getDir() {
		return $this->dir;
	}

	public function setUserId($userId) {
		$this->userId = $userId;
	}

	public function setPage($page) {
		$this->page = $page;
	}

	/**
	 * 
	 * @param \Onepagr\TemplateBundle\Content\Entity\AbstractEntity $entity
	 * @return \Onepagr\TemplateBundle\Content\Mapper\AbstractContentMapper
	 */
	public function addEntity(AbstractEntity $entity) {
		$this->entities[$entity->getName()] = $entity;
		return $this;
	}

	public function setDir($dir) {
		$this->dir = $dir;
	}


	abstract public function save();
}
