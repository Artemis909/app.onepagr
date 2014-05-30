<?php

namespace Onepagr\BuilderBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('OnepagrBuilderBundle:Default:index.html.twig', array('name' => $name));
    }
}
