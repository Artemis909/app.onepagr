<?php

namespace Onepagr\TemplateBundle\TwigExtension;

class AssetPathTwigExtension extends \Twig_Extension
{
    public function getFunctions()
    {
        return array(
            new \Twig_SimpleFunction('onepagr_asset', array($this, 'asset')),
        );
    }

    public function asset($path, $baseUrl)
    {
		return str_replace("##baseUrl##", $baseUrl, $path);
    }

    public function getName()
    {
        return 'onepagr_asset';
    }
}