<?php

namespace Ideallio\UserBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('IdeallioUserBundle:Default:index.html.twig', array('name' => $name));
    }
}
