<?php

use Symfony\Component\HttpKernel\Kernel;
use Symfony\Component\Config\Loader\LoaderInterface;

class AppKernel extends Kernel {

	public function registerBundles() {
		$bundles = array(
			new Symfony\Bundle\FrameworkBundle\FrameworkBundle(),
			new Symfony\Bundle\SecurityBundle\SecurityBundle(),
			new Symfony\Bundle\TwigBundle\TwigBundle(),
			new Symfony\Bundle\MonologBundle\MonologBundle(),
			new Symfony\Bundle\SwiftmailerBundle\SwiftmailerBundle(),
			new Symfony\Bundle\AsseticBundle\AsseticBundle(),
			new Doctrine\Bundle\DoctrineBundle\DoctrineBundle(),
			new Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle(),
			new Onepagr\CssBundle\OnepagrCssBundle(),
			new Onepagr\TemplateBundle\OnepagrTemplateBundle(),
			new Onepagr\BuilderBundle\OnepagrBuilderBundle(),
			new Onepagr\UserBundle\OnepagrUserBundle(),
			#new HWI\Bundle\OAuthBundle\HWIOAuthBundle(),
			new Nedwave\MandrillBundle\NedwaveMandrillBundle(),
			new Nedwave\UserBundle\NedwaveUserBundle(),
            new Onepagr\AppBundle\OnepagrAppBundle(),
			new Lexik\Bundle\FormFilterBundle\LexikFormFilterBundle(),
			new JordiLlonch\Bundle\CrudGeneratorBundle\JordiLlonchCrudGeneratorBundle(),
            new Ideallio\UserBundle\IdeallioUserBundle(),
		);

		if (in_array($this->getEnvironment(), array('dev', 'test'))) {
			$bundles[] = new Acme\DemoBundle\AcmeDemoBundle();
			$bundles[] = new Symfony\Bundle\WebProfilerBundle\WebProfilerBundle();
			$bundles[] = new Sensio\Bundle\DistributionBundle\SensioDistributionBundle();
			$bundles[] = new Sensio\Bundle\GeneratorBundle\SensioGeneratorBundle();
		}

		return $bundles;
	}

	public function registerContainerConfiguration(LoaderInterface $loader) {
		$loader->load(__DIR__ . '/config/config_' . $this->getEnvironment() . '.yml');
	}

}
