<?php

namespace Onepagr\TemplateBundle\Content\Item;

use Onepagr\TemplateBundle\Content\ListContent;
/**
 * 
 */
class ListItem extends ListContent {
	
	protected $allowedAttributes = array(
		'class',
		'img',
		'thumbnail',
		'largeImage'
	);
	
	
	
	protected $attributes;
	
	public function getAllowedAttributes() {
		return $this->allowedAttributes;
	}

	public function getAttributes() {
		return $this->attributes;
	}

	public function setAllowedAttributes($allowedAttributes) {
		$this->allowedAttributes = $allowedAttributes;
		return $this;
	}

	public function setAttributes($attributes) {
		$this->attributes = $attributes;
		return $this;
	}


	
	
	
}
