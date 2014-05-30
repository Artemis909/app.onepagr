<?php

namespace Onepagr\CssBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller {

	public function indexAction($name) {
		$assets = $this->get('templating.helper.assets');

		//$file = 
		$css = "
  ul, p {
    color: $(dark_-color);

  }
";
		$vars = array('dark' => array('-color' => 'white'));
		$vars = $this->flatten($vars);
		// print_r($vars);
		echo csscrush_string($css, array('vars' => $vars));
		exit;

		//echo ;

		return $this->render('OnepagrCssBundle:Default:index.html.twig', array('name' => $name));
	}

	public function flatten($array, $joiner = '_', $prefix = '') {
		$result = array();
		foreach ($array as $key => $value) {
			if (is_array($value)) {
				$result = $result + $this->flatten($value, $joiner, $prefix . $key . $joiner);
			} else {
				$result[$prefix . $key] = $value;
			}
		}
		return $result;
	}

}
