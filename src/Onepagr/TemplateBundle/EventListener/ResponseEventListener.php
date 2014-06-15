<?php

namespace Onepagr\TemplateBundle\EventListener;

use Symfony\Component\HttpKernel\Event\FilterResponseEvent;

/**
 * 
 */
class ResponseEventListener {

	/**
	 *
	 * @var \Onepagr\TemplateBundle\Helper\ContentHelper 
	 */
	protected $save;
	
	/**
	 *
	 * @var type 
	 */
	protected $contentHelper;
	
	/**
	 *
	 * @var domain 
	 */
	protected $domain;
			
	
	public function getDomain() {
		return $this->domain;
	}

	public function setDomain($domain) {
		$this->domain = $domain;
	}

	

	/**
	 * 
	 * @return \Onepagr\TemplateBundle\Helper\ContentHelper
	 */
	public function getContentHelper() {
		return $this->contentHelper;
	}

	public function setContentHelper(\Onepagr\TemplateBundle\Helper\ContentHelper $contentHelper) {
		$this->contentHelper = $contentHelper;
		return $this;
	}

	
	/**
	 * 
	 * @return type
	 */
	public function getSave() {
		return $this->save;
	}

	/**
	 * 
	 * @param type $save
	 * @return \Onepagr\TemplateBundle\EventListener\ResponseEventListener
	 */
	public function setSave($save) {
		$this->save = $save;
		return $this;
	}

	public function onKernelResponse(FilterResponseEvent $event) {
		// check to see if onKernelController marked this as a token "auth'ed" request
		if (true === $this->getSave()) {
			$response = $event->getResponse();

			// create a hash and set it as a response header
			$helper = $this->getContentHelper();
			
			if($helper && $this->getDomain()) {
				
				$helper->cacheIndex($response->getContent(), $this->getDomain());
			}
			
			// ;
		}
	}

}
