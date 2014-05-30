<?php

namespace Onepagr\TemplateBundle\Content\Entity;


/**
 * 
 */
abstract class AbstractEntity {

	/**
	 *
	 * @var string 
	 */
	protected $name;

	/**
	 *
	 * @var array 
	 * 
	 */
	protected $data = array();

	public function __construct() {
		$this->setDefaultName();
	}

	public function getName() {
		return $this->name;
	}

	public function getData() {
		return $this->data;
	}

	public function setName($name) {
		$this->name = $name;
	}

	public function setData($data) {
		$this->data = $data;
	}

	abstract function setDefaultName();
}
