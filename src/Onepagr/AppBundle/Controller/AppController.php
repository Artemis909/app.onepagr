<?php

namespace Onepagr\AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AppController extends Controller {

	public function indexAction() {

		$userManager = $this->get('nedwave_user.user_manager');
		$entity = $userManager->createUser();


		$form = $this->createForm('nedwave_user_registration', $entity, array(
			'action' => $this->generateUrl('user_registration_register'),
			'method' => 'POST',
			'validation_groups' => 'registration'
		));

		//var_dump($form->vars());
		//exit;
		return $this->render('OnepagrAppBundle:App:index.html.twig', array('form' => $form->createView()));
	}

	public function dashboardAction() {
		return $this->render('OnepagrAppBundle:App:dashboard.html.twig', array());
	}

	/**
	 * 
	 * @return type
	 */
	public function templatesAction() {
		return $this->render('OnepagrAppBundle:App:templates.html.twig', array());
	}
	
	/**
	 * 
	 * @return type
	 */
	public function contentAction() {
		
		$contentGroup = '';
		return $this->render('OnepagrAppBundle:App:content.html.twig', array());
	}

}
