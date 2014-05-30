<?php

namespace Onepagr\TemplateBundle\Content;

/**
 * 
 */
class ListContent {

	/**
	 *
	 * @var string 
	 */
	protected $h1;

	/**
	 *
	 * @var string 
	 */
	protected $h2;

	/**
	 *
	 * @var string 
	 */
	protected $h3;

	/**
	 *
	 * @var string 
	 */
	protected $h4;

	/**
	 *
	 * @var string 
	 */
	protected $h5;

	/**
	 *
	 * @var string 
	 */
	protected $h6;

	/**
	 *
	 * @var string 
	 */
	protected $h7;

	/**
	 *
	 * @var string 
	 */
	protected $p;
	
	/**
	 *
	 * @var string 
	 */
	protected $startDate;
	
	/**
	 *
	 * @var string 
	 */
	protected $endDate;

	/**
	 *
	 * @var array 
	 */
	protected $items;

	public function getH1() {
		return $this->h1;
	}

	public function getH2() {
		return $this->h2;
	}

	public function getH3() {
		return $this->h3;
	}

	public function getH4() {
		return $this->h4;
	}

	public function getH5() {
		return $this->h5;
	}

	public function getH6() {
		return $this->h6;
	}

	public function getH7() {
		return $this->h7;
	}

	public function getP() {
		return $this->p;
	}

	public function getItems() {
		return $this->items;
	}

	public function setH1($h1) {
		$this->h1 = $h1;
	}

	public function setH2($h2) {
		$this->h2 = $h2;
	}

	public function setH3($h3) {
		$this->h3 = $h3;
	}

	public function setH4($h4) {
		$this->h4 = $h4;
	}

	public function setH5($h5) {
		$this->h5 = $h5;
	}

	public function setH6($h6) {
		$this->h6 = $h6;
	}

	public function setH7($h7) {
		$this->h7 = $h7;
	}

	public function setP($p) {
		$this->p = $p;
	}

	public function setItems($items) {
		$this->items = $items;
	}
	
	public function getStartDate() {
		return $this->startDate;
	}

	public function getEndDate() {
		return $this->endDate;
	}

	public function setStartDate($startDate) {
		$this->startDate = $startDate;
	}

	public function setEndDate($endDate) {
		$this->endDate = $endDate;
	}

}
