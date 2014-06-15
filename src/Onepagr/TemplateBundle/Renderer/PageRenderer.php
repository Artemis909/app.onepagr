<?php

namespace Onepagr\TemplateBundle\Renderer;

/**
 * 
 */
class PageRenderer {

	protected $indexDir;
	
	public function getIndexDir() {
		return $this->indexDir;
	}

	public function setIndexDir($indexDir) {
		$this->indexDir = $indexDir;
		return $this;;
	}

		public function __construct() {
		
	}

	public function render($host) {

		$subdomain = $this->extractSubdomains($host);

		if ($subdomain === 'app') {
			$subdomain = null;
		}
		if ($subdomain) {
			$file = $this->getIndexDir() . '/' . $subdomain . '/index.html';
			if(file_exists($file)) {
				echo file_get_contents($file);
				exit;
			}
		}
		
	}

	protected function extractSubdomains($domain) {
		$subdomains = $domain;
		$domain = $this->extractDomain($subdomains);

		return rtrim(strstr($subdomains, $domain, true), '.');
	}

	protected function extractDomain($domain) {
		if (preg_match("/(?P<domain>[a-z0-9][a-z0-9\-]{1,63}\.[a-z\.]{2,6})$/i", $domain, $matches)) {
			return $matches['domain'];
		} else {
			return $domain;
		}
	}

}
