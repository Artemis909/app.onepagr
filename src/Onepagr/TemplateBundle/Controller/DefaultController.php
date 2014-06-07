<?php

namespace Onepagr\TemplateBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller {

    public function indexAction($name) {
        return $this->render('OnepagrTemplateBundle:Default:index.html.twig', array('name' => $name));
    }

    protected function getHelper() {
        
    }

    protected function getContentFileMapper($profileDir, $userId, $page) {
        $mapper = new \Onepagr\TemplateBundle\Content\Mapper\FileMapper\ContentFileMapper();
        $mapper->setDir($profileDir);
        $mapper->setUserId($userId);
        $mapper->setPage($page);
        return $mapper;
    }
    
    protected function getPageMapper($profileDir, $userId, $page) {
        $mapper = new \Onepagr\TemplateBundle\Content\Mapper\FileMapper\PageMapper();
        $mapper->setDir($profileDir);
        $mapper->setUserId($userId);
        $mapper->setPage($page);
        return $mapper;
    }
    
    

    /**
     * 
     * @param type $name
     */
    public function createAction($name) {
		
		$request = $this->getRequest();
		$baseUrl = $request->getScheme() . '://' . $request->getHttpHost() . $request->getBasePath();
	
        $contentEntity = new \Onepagr\TemplateBundle\Content\Entity\ContentEntity();
        $paletteEntity = new \Onepagr\TemplateBundle\Content\Entity\PaletteEntity();
        $settingEntity = new \Onepagr\TemplateBundle\Content\Entity\SettingEntity();
        $contentSectionMapEntity = new \Onepagr\TemplateBundle\Content\Entity\ContentSectionMapEntity();
        $viewDataEntity = new \Onepagr\TemplateBundle\Content\Entity\ViewDataEntity();

        $loader = new \Onepagr\TemplateBundle\Content\LoaderContent;
        $helper = new \Onepagr\TemplateBundle\Helper\ContentHelper();

        // $loader->setCssTemplateDir($this->get('kernel')->getRootDir() . '/../web/');
        // $loader->setProfileDir($this->get('kernel')->getRootDir() . '/../web/profile/');
        
        $helper->setCssTemplateDir($this->get('kernel')->getRootDir() . '/../web/');
        $helper->setProfileDir($this->get('kernel')->getRootDir() . '/../web/profile/');
        $helper->setBaseUrl($baseUrl);
		
		
        $paletteId = $this->getRequest()->query->get('palette');
        $data = $loader->load($name);

        $contentEntity->setData($data['contents']);
        $paletteEntity->setData($data['palettes']);
        $settingEntity->setData($data['settings']);
        $contentSectionMapEntity->setData($data['sectionContentMap']);

        $mapper = $this->getContentFileMapper($this->get('kernel')->getRootDir() . '/../web/profile/', $data['settings']['userId'], $data['settings']['page']);
        $mapper->addEntity($contentEntity)
                ->addEntity($paletteEntity)
                ->addEntity($settingEntity)
                ->addEntity($contentSectionMapEntity);
        
        $helper->setEntities($mapper->getEntities());

        $pageMapper = $this->getPageMapper($this->get('kernel')->getRootDir() . '/../web/profile/', $data['settings']['userId'], $data['settings']['page']);
        $pageMapper->save();


        $palette = $helper->getPalette($paletteId);
        $viewData = $helper->getViewData($palette);

        $mapper->addEntity($viewDataEntity);
        $mapper->save();

        return $this->render($viewData['settings']['template'], $viewData);
    }

    /**
     * 
     * @param type $name
     * @return type
     */
    public function timelineAction($name) {
        return $this->render("OnepagrTemplateBundle:Timeline:timeline.$name.twig", array('name' => $name));
    }

    public function headerAction($name) {
        return $this->render("OnepagrTemplateBundle:Header:header.$name.twig", array('name' => $name));
    }

    public function userAction($name) {
        
    }

    public function pageAction($page, $palette = 1) {

		$request = $this->getRequest();
		$baseUrl = $request->getScheme() . '://' . $request->getHttpHost() . $request->getBasePath();
	
		
        $userId = 'example';
        
        $contentEntity = new \Onepagr\TemplateBundle\Content\Entity\ContentEntity();
        $paletteEntity = new \Onepagr\TemplateBundle\Content\Entity\PaletteEntity();
        $settingEntity = new \Onepagr\TemplateBundle\Content\Entity\SettingEntity();
        $contentSectionMapEntity = new \Onepagr\TemplateBundle\Content\Entity\ContentSectionMapEntity();
        $helper = new \Onepagr\TemplateBundle\Helper\ContentHelper();

        // $loader->setCssTemplateDir($this->get('kernel')->getRootDir() . '/../web/');
        // $loader->setProfileDir($this->get('kernel')->getRootDir() . '/../web/profile/');
        
        $helper->setCssTemplateDir($this->get('kernel')->getRootDir() . '/../web/');
        $helper->setProfileDir($this->get('kernel')->getRootDir() . '/../web/profile/');
        $helper->setBaseUrl($baseUrl);
		
        $paletteId = $palette;

        $mapper = $this->getContentFileMapper($this->get('kernel')->getRootDir() . '/../web/profile/', $userId, $page);
        $enitties = $mapper->addEntity($contentEntity)
                ->addEntity($paletteEntity)
                ->addEntity($settingEntity)
                ->addEntity($contentSectionMapEntity)
                ->load();
        
        $helper->setEntities($enitties);

        $palette = $helper->getPalette($paletteId);
	
        $viewData = $helper->getViewData($palette);

        return $this->render($viewData['settings']['template'], $viewData);
        

      
    }

    public function templateAction($folder, $name) {

        $contentEntity = new \Onepagr\TemplateBundle\Content\Entity\ContentEntity();
        $paletteEntity = new \Onepagr\TemplateBundle\Content\Entity\PaletteEntity();
        $settingEntity = new \Onepagr\TemplateBundle\Content\Entity\SettingEntity();
        $contentSectionMapEntity = new \Onepagr\TemplateBundle\Content\Entity\ContentSectionMapEntity();

        $section = array(
            'h1' => "Introducing",
            'h2' => "Onepager",
            'h3' => "Build A Beautiful Web With Simplicity",
            "p" => "We're launching into a closed <strong>beta</strong> soon!
                    <span>Enter your email below to secure a spot.</span>",
            "list" => array(),
            "colsize" => "col-md-6"
        );
        /**
          $section['list'][] = array(
          "i" => "fa fa-bolt",
          "h1" => "Design",
          "h2" => "Brand identity",
          "p" => "Our designers will be available to help you choose colors, create your logo, select fonts; to increase your online presence from your launching page to your fully fledged operation application."
          );

          $section['list'][] = array(
          "i" => "fa fa-bolt",
          "h1" => "Design",
          "h2" => "Brand identity",
          "p" => "Our designers will be available to help you choose colors, create your logo, select fonts; to increase your online presence from your launching page to your fully fledged operation application."
          );

          $section['list'][] = array(
          "i" => "fa fa-bolt",
          "h1" => "Design",
          "h2" => "Brand identity",
          "p" => "Our designers will be available to help you choose colors, create your logo, select fonts; to increase your online presence from your launching page to your fully fledged operation application."
          );

          $section['list'][] = array(
          "i" => "fa fa-bolt",
          "h1" => "Design",
          "h2" => "Brand identity",
          "p" => "Our designers will be available to help you choose colors, create your logo, select fonts; to increase your online presence from your launching page to your fully fledged operation application."
          );

          $section['list'][] = array(
          "i" => "fa fa-bolt",
          "h1" => "Design",
          "h2" => "Brand identity",
          "p" => "Our designers will be available to help you choose colors, create your logo, select fonts; to increase your online presence from your launching page to your fully fledged operation application."
          );

          $section['list'][] = array(
          "i" => "fa fa-bolt",
          "h1" => "Design",
          "h2" => "Brand identity",
          "p" => "Our designers will be available to help you choose colors, create your logo, select fonts; to increase your online presence from your launching page to your fully fledged operation application."
          );

          $section['list'][] = array(
          "i" => "fa fa-bolt",
          "h1" => "Design",
          "h2" => "Brand identity",
          "p" => "Our designers will be available to help you choose colors, create your logo, select fonts; to increase your online presence from your launching page to your fully fledged operation application."
          );

          $section['list'][] = array(
          "i" => "fa fa-bolt",
          "h1" => "Design",
          "h2" => "Brand identity",
          "p" => "Our designers will be available to help you choose colors, create your logo, select fonts; to increase your online presence from your launching page to your fully fledged operation application."
          );
         * 
         * */
        $userId = '1234';
        $page = 'resume';

        $userId = 'example';
        $page = 'onepagr-browser';

        $palletes = $this->getPalletByPage($userId, $page);

        // $palletes = $this->getFlat1();
        // $palletes = $this->getFlatRainbow();



        $font = array(
            'fontName' => "Lato",
            'fontFamily' => "'Lato', sans-serif;"
        );

        $font = array(
            'fontName' => "Raleway",
            'fontFamily' => "'Raleway', sans-serif;"
        );

        $pallette = $this->getRequest()->query->get('pallette') ? $this->getRequest()->query->get('pallette') : 0;

        $vars = isset($palletes[$pallette]) ? $palletes[$pallette] : $palletes[0];
        $vars = array_merge($vars, $font);
        // $vars['bgImage'] = './full/11.png';

        $options = array(
            'vars' => $vars
        );


        $settings = array(
            'meta' => array(
                'title' => 'One Page Website Creator',
                'description' => 'One page website builder',
                'keywords' => 'One page website builder, one page creator, Free, modular, snippets, free high resolution images, Free high resolution background, responsive'
            ),
            'font' => $font,
            'userId' => $userId,
            'page' => $page,
            'template' => "OnepagrTemplateBundle:Template:subscribe.plain.twig",
        );

        $contents = array();
        $contents['header'] = array(
            'id' => 'header',
            'data' => $section
        );

        $contents['form'] = array(
            'id' => 'form',
            'data' => array(
                'action' => 'http://onepagr.us8.list-manage.com/subscribe/post?u=8ac8f7e2595065bfb4aff98da&amp;id=48e2551f38',
                'email' => array('label' => 'Email', 'name' => 'EMAIL'),
                'hidden' => array('label' => 'Hidden', 'name' => 'b_8ac8f7e2595065bfb4aff98da_48e2551f38'),
                'fullname' => array('label' => 'Fullname', 'name' => 'FULLNAME'),
                'subject' => array('label' => 'Subject', 'name' => 'SUBJECT'),
                'message' => array('label' => 'Message', 'name' => 'MESSAGE'),
                'submitText' => array('label' => 'Request your invite')
            )
        );


        $cssTemplate = $this->get('kernel')->getRootDir() . '/../web/profile/' . $userId . '/pages/' . $page . '/assets/css/style.template.css';
        if (!file_exists($cssTemplate)) {
            // echo $cssTemplate;
            $cssTemplate = $this->get('kernel')->getRootDir() . '/../web/template/css/malick/' . 'style.css';
        }


        // sectionId => contentId
        $sectionContentMap = array(
            'header' => array(
                'template' => 'OnepagrTemplateBundle:Header:header.browser.twig',
                'templateCss' => array($cssTemplate),
                'templateJs' => array(),
                'contentId' => 'header'
            )
        );

        $contentEntity->setData($contents);
        $paletteEntity->setData($palletes);
        $settingEntity->setData($settings);
        $contentSectionMapEntity->setData($sectionContentMap);

        $mapper = new \Onepagr\TemplateBundle\Content\Mapper\FileMapper\ContentFileMapper();
        $mapper->setDir($this->get('kernel')->getRootDir() . '/../web/profile/');
        $mapper->setUserId($userId);
        $mapper->setPage($page);

        $mapper->addEntity($contentEntity)
                ->addEntity($paletteEntity)
                ->addEntity($settingEntity)
                ->addEntity($contentSectionMapEntity)
                ->save();

        $pageMapper = new \Onepagr\TemplateBundle\Content\Mapper\FileMapper\PageMapper();
        $pageMapper->setDir($this->get('kernel')->getRootDir() . '/../web/profile/');
        $pageMapper->setUserId($userId);
        $pageMapper->setPage($page);

        $pageMapper->save();

        //$json = $serializer->serialize($contents, 'json'); // Output: {"name":"foo"}
        // echo $json;


        $css = $this->getCss($cssTemplate, $options, $userId, $page);

        $viewData = array('name' => $name,
            'section' => $section,
            'css' => $css,
            'sections' => array(
                'header' => array(
                    'template' => 'OnepagrTemplateBundle:Header:header.malick.twig',
                    'content' => $contents['header'],
                )
            ),
            'contents' => $contents,
            'settings' => $settings
        );

        foreach ($sectionContentMap AS $key => $value) {
            $viewData['sections'][$key] = $value;
            $viewData['sections'][$key]['content'] = $contents[$value['contentId']];
        }
        // $cssTemplate = $this->get('kernel')->getRootDir() . '/../web/bundles/onepagrtemplate/css/templates/' . 'header/header.book.template.css';

        return $this->render($settings['template'], $viewData);
    }

    public function getSampleGallery() {

        $path = $this
                ->get('templating.helper.assets')
                ->getUrl('profile/malickceesay/media/img/');
        $gallery = array();
        $gallery['h1'] = 'Gallery';
        $gallery['h2'] = 'Click thumbnails for more details';

        for ($i = 1; $i <= 10; $i++) {
            $gallery['items'][] = array(
                'thumbnail' => $path . '/250/' . $i . '.png',
                'h1' => 'Untitled',
                'largeImage' => $path . '/500/' . $i . '.png',
                'downloadImage' => $path . '/500/' . $i . '.png',
                'p' => 'Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.'
            );
        }
        return $gallery;
    }

    public function getCss($cssTemplate, $options, $user, $page) {
        $outputDir = $this->get('kernel')->getRootDir() . '/../web/profile/' . $user . '/pages/' . $page . '/assets/css/';
        $assetDir = $this->get('kernel')->getRootDir() . '/../web/profile/' . $user . '/pages/' . $page . '/assets/img/';
        $options['output_dir'] = $outputDir;
        $options['asset_dir'] = $assetDir;
        $options['output_file'] = 'style.css';
        // $options['rewrite_import_urls'] = false;
        return csscrush_file($cssTemplate, $options);
        // csscrush_file($file
    }

    private function getFlatRainbow() {
        $palletes = array();

        $palletes[0] = array(
            'themeColor' => '#528CCB',
            'name' => 'Fole Me Over Blue',
            'bgColor1' => '#528CCB',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#528CCB',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[1] = array(
            'themeColor' => '#F31D2F',
            'name' => 'Right Said Red',
            'bgColor1' => '#F31D2F',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#F31D2F',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[2] = array(
            'themeColor' => '#FF8600',
            'name' => 'Borange',
            'bgColor1' => '#FF8600',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#FF8600',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[3] = array(
            'themeColor' => '#00D717',
            'name' => 'Mant Green',
            'bgColor1' => '#00D717',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#00D717',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[4] = array(
            'themeColor' => '#BF4ACC',
            'name' => 'Slurple',
            'bgColor1' => '#BF4ACC',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#BF4ACC',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        return $palletes;
    }

    private function getPalletByPage($userId, $page) {
        if (in_array($page, array('onepagr', 'onepagr-device', 'onepagr-browser'))) {
            return $this->getOnePagerPalette();
        }
        return $this->getFlat1();
    }

    private function getOnePagerPalette() {
        $palletes = array();

        $palletes[0] = array(
            'themeColor' => '#2C82C9',
            'name' => 'Happy Blue',
            'bgColor1' => '#2C82C9',
            'bgImage' => '../img/mockups.svg',
            'bgImage2' => '../img/fruit_1.jpg',
            'bgColor2' => '#363F48',
            'fontColor1' => '#fff',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'opacity' => .85,
            'borderRadius' => '4px',
            'border' => '0',
            'borderColor' => '#fff',
            'borderRadius2' => '8px'
        );

        $palletes['0-dashed'] = array(
            'themeColor' => '#2C82C9',
            'name' => 'Happy Blue',
            'bgColor1' => '#2C82C9',
            'bgImage' => '../img/mockups.svg',
            'bgImage2' => '../img/fruit_1.jpg',
            'bgColor2' => 'transparent',
            'fontColor1' => '#fff',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'opacity' => .85,
            'borderRadius' => '0px',
            'border' => '1px dashed',
            'borderColor' => '#fff',
            'borderRadius2' => '8px'
        );

        $palletes['0-solid'] = array(
            'themeColor' => '#2C82C9',
            'name' => 'Happy Blue',
            'bgColor1' => '#2C82C9',
            'bgImage' => '../img/mockups.svg',
            'bgImage2' => '../img/fruit_1.jpg',
            'bgColor2' => 'transparent',
            'fontColor1' => '#fff',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'opacity' => .85,
            'borderRadius' => '0px',
            'border' => '1px solid',
            'borderColor' => '#fff',
            'borderRadius2' => '8px'
        );

        $palletes[1] = array(
            'themeColor' => '#2CC990',
            'name' => 'Calm Green',
            'bgColor1' => '#2CC990',
            'bgImage' => '../img/mockups.svg',
            'bgImage2' => '../img/fruit_2.jpg',
            'bgColor2' => '#363F48',
            'fontColor1' => '#fff',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'opacity' => .85,
            'borderRadius' => '0px',
            'border' => '1px solid',
            'borderColor' => '#fff',
        );

        $palletes['1-solid'] = array(
            'themeColor' => '#2CC990',
            'name' => 'Calm Green',
            'bgColor1' => '#2CC990',
            'bgImage' => '../img/mockups.svg',
            'bgImage2' => '../img/fruit_1.jpg',
            'bgColor2' => 'transparent',
            'fontColor1' => '#fff',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'opacity' => .85,
            'borderRadius' => '0px',
            'border' => '1px solid',
            'borderColor' => '#fff',
        );

        $palletes[2] = array(
            'themeColor' => '#EEE657',
            'name' => 'Yello',
            'bgColor1' => '#EEE657',
            'bgImage' => '../img/mockups.svg',
            'bgImage2' => '../img/fruit_4.jpg',
            'bgColor2' => 'transparent',
            'fontColor1' => '#464648',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'opacity' => .85,
            'borderRadius' => '0px',
            'border' => '2px solid',
            'borderColor' => '#464648',
        );

        $palletes[3] = array(
            'themeColor' => '#FCB941',
            'name' => 'Thai Curry',
            'bgColor1' => '#FCB941',
            'bgImage' => '../img/mockups.svg',
            'bgImage2' => '../img/fruit_1.jpg',
            'bgColor2' => '#fff',
            'fontColor1' => '#FCB941',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'opacity' => .85,
            'borderRadius' => '0px',
            'border' => '0px',
            'borderColor' => '#fff',
        );

        $palletes[4] = array(
            'themeColor' => '#FC6042',
            'name' => 'Burnt Red',
            'bgColor1' => '#FC6042',
            'bgImage' => '../img/mockups.svg',
            'bgImage2' => '../img/fruit_4.jpg',
            'bgColor2' => '#fff',
            'fontColor1' => '#404040',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'opacity' => 0,
            'borderRadius' => '0px',
            'border' => '0px',
            'borderColor' => '#fff',
        );

        $palletes[5] = array(
            'themeColor' => '#FC6042',
            'name' => 'Burnt Red',
            'bgColor1' => '#FC6042',
            'bgImage' => '../img/apple-gear-looking-pretty.jpg',
            'bgImage2' => '../img/fruit_1.jpg',
            'bgColor2' => '#fff',
            'fontColor1' => '#fff',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'opacity' => 0,
            'borderRadius' => '0px',
            'border' => '0px',
            'borderColor' => '#fff',
        );

        $palletes[6] = array(
            'themeColor' => '#FC6042',
            'name' => 'Burnt Red',
            'bgColor1' => '#FC6042',
            'bgImage' => '../img/bag-and-hands.jpg',
            'bgImage2' => '../img/fruit_1.jpg',
            'bgColor2' => '#fff',
            'fontColor1' => '#fff',
            'fontColor2' => '#fff',
            'fontColor3' => '#fff',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'bgImage2' => '../img/fruit_1.jpg',
            'opacity' => 0,
            'borderRadius' => '0px',
            'border' => '0px',
            'borderColor' => '#fff',
        );

        $palletes[7] = array(
            'themeColor' => '#FC6042',
            'name' => 'Burnt Red',
            'bgColor1' => '#FC6042',
            'bgImage' => '../img/i.o.jpg',
            'bgImage2' => '../img/fruit_1.jpg',
            'bgColor2' => '#fff',
            'fontColor1' => '#fff',
            'fontColor2' => '#fff',
            'fontColor3' => '#fff',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'opacity' => 0,
            'borderRadius' => '0px',
            'border' => '0px',
            'borderColor' => '#fff',
        );

        $palletes[8] = array(
            'themeColor' => '#FC6042',
            'name' => 'Burnt Red',
            'bgColor1' => '#FC6042',
            'bgImage' => '../img/fruit_1.jpg',
            'bgImage2' => '../img/fruit_1.jpg',
            'bgColor2' => '#2C82C9',
            'fontColor1' => '#fff',
            'fontColor2' => '#fff',
            'fontColor3' => '#fff',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'opacity' => 0,
            'borderRadius' => '4px',
            'border' => '0px',
            'borderColor' => '#fff',
        );

        $palletes[9] = array(
            'themeColor' => '#FC6042',
            'name' => 'Burnt Red',
            'bgColor1' => '#FC6042',
            'bgImage' => '../img/fruit_1.jpg',
            'bgImage2' => '../img/fruit_1.jpg',
            'bgColor2' => '#fff',
            'fontColor1' => '#fff',
            'fontColor2' => '#fff',
            'fontColor3' => '#fff',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'opacity' => 0,
            'borderRadius' => '0px',
            'border' => '0px',
            'borderColor' => '#fff',
        );

        $palletes[10] = array(
            'themeColor' => '#FC6042',
            'name' => 'Burnt Red',
            'bgColor1' => '#FC6042',
            'bgImage' => '../img/fruit_3.jpg',
            'bgImage2' => '../img/fruit_1.jpg',
            'bgColor2' => '#fff',
            'fontColor1' => '#fff',
            'fontColor2' => '#fff',
            'fontColor3' => '#fff',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'opacity' => 0,
            'borderRadius' => '0px',
            'border' => '0px',
            'borderColor' => '#fff',
        );

        $palletes[11] = array(
            'themeColor' => '#FC6042',
            'name' => 'Burnt Red',
            'bgColor1' => '#FC6042',
            'bgImage' => '../img/fruit_4.jpg',
            'bgImage2' => '../img/fruit_1.jpg',
            'bgColor2' => 'transparent',
            'fontColor1' => '#fff',
            'fontColor2' => '#fff',
            'fontColor3' => '#fff',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'opacity' => 1,
            'borderRadius' => '0px',
            'border' => '1px solid',
            'borderColor' => '#fff',
        );

        $palletes[14] = array(
            'themeColor' => '#363F48',
            'name' => 'Happy Blue',
            'bgColor1' => '#363F48',
            'bgImage' => '../img/mockups.svg',
            'bgImage2' => '../img/fruit_1.jpg',
            'bgColor2' => '#2C82C9',
            'fontColor1' => '#fff',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'opacity' => .85,
            'borderRadius' => '0px',
            'border' => '0px',
            'borderColor' => '#fff',
        );

        return $palletes;
    }

    private function getFlat1() {
        $palletes = array();

        $palletes[0] = array(
            'themeColor' => '#2C82C9',
            'name' => 'Happy Blue',
            'bgColor1' => '#2C82C9',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#2C82C9',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'borderRadius' => '3px'
        );

        $palletes[1] = array(
            'themeColor' => '#2CC990',
            'name' => 'Calm Green',
            'bgColor1' => '#2CC990',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#2CC990',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'borderRadius' => '3px'
        );

        $palletes[2] = array(
            'themeColor' => '#EEE657',
            'name' => 'Yello',
            'bgColor1' => '#EEE657',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#EEE657',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'borderRadius' => '3px'
        );

        $palletes[3] = array(
            'themeColor' => '#FCB941',
            'name' => 'Thai Curry',
            'bgColor1' => '#FCB941',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#FCB941',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'borderRadius' => '3px'
        );

        $palletes[4] = array(
            'themeColor' => '#FC6042',
            'name' => 'Burnt Red',
            'bgColor1' => '#FC6042',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#FC6042',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)',
            'borderRadius' => '3px'
        );

        return $palletes;
    }

    private function getFlatUIPallette() {
        $palletes = array();



        $palletes[0] = array(
            'themeColor' => '#1abc9c',
            'name' => 'Turquoise',
            'bgColor1' => '#1abc9c',
            'bgImage' => './book/profile.png',
            'bgColor2' => '#fff',
            'fontColor1' => '#1abc9c',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[1] = array(
            'themeColor' => '#2ecc71',
            'name' => 'Emerald',
            'bgColor1' => '#2ecc71',
            'bgImage' => './book/profile.png',
            'bgColor2' => '#fff',
            'fontColor1' => '#2ecc71',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[2] = array(
            'themeColor' => '#3498db',
            'name' => 'Pete River',
            'bgColor1' => '#3498db',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#3498db',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[2] = array(
            'themeColor' => '#3498db',
            'name' => 'Pete River',
            'bgColor1' => '#3498db',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#3498db',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[3] = array(
            'themeColor' => '#9b59b6',
            'name' => 'Amethyst',
            'bgColor1' => '#9b59b6',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#9b59b6',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[3] = array(
            'themeColor' => '#9b59b6',
            'name' => 'Amethyst',
            'bgColor1' => '#9b59b6',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#9b59b6',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[4] = array(
            'themeColor' => '#34495e',
            'name' => 'Wet Asphalt',
            'bgColor1' => '#34495e',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#34495e',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[5] = array(
            'themeColor' => '#16a085',
            'name' => 'Green Sea',
            'bgColor1' => '#16a085',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#16a085',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[6] = array(
            'themeColor' => '#27ae60',
            'name' => 'Nephritis',
            'bgColor1' => '#27ae60',
            'bgImage' => './book/profile_1.png',
            'bgColor2' => '#fff',
            'fontColor1' => '#27ae60',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[7] = array(
            'themeColor' => '#2980b9',
            'name' => 'Belize Hole',
            'bgColor1' => '#2980b9',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#2980b9',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[8] = array(
            'themeColor' => '#8e44ad',
            'name' => 'Wizteria',
            'bgColor1' => '#8e44ad',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#8e44ad',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[9] = array(
            'themeColor' => '#2c3e50',
            'name' => 'Midnight Blue',
            'bgColor1' => '#2c3e50',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#2c3e50',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[10] = array(
            'themeColor' => '#f1c40f',
            'name' => 'Sunflower',
            'bgColor1' => '#f1c40f',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#f1c40f',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[10] = array(
            'themeColor' => '#f1c40f',
            'name' => 'Sunflower',
            'bgColor1' => '#f1c40f',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#f1c40f',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[11] = array(
            'themeColor' => '#e67e22',
            'name' => 'Carrot',
            'bgColor1' => '#e67e22',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#e67e22',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[12] = array(
            'themeColor' => '#e74c3c',
            'name' => 'Alzarin',
            'bgColor1' => '#e74c3c',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#e74c3c',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[13] = array(
            'themeColor' => '#ecf0f1',
            'name' => 'Clouds',
            'bgColor1' => '#ecf0f1',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#ecf0f1',
            'fontColor2' => '#bdc3c7',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[14] = array(
            'themeColor' => '#95a5a6',
            'name' => 'Concrete',
            'bgColor1' => '#95a5a6',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#95a5a6',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[15] = array(
            'themeColor' => '#f39c12',
            'name' => 'Orange',
            'bgColor1' => '#f39c12',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#f39c12',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[16] = array(
            'themeColor' => '#d35400',
            'name' => 'Pumpkin',
            'bgColor1' => '#d35400',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#d35400',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[17] = array(
            'themeColor' => '#c0392b',
            'name' => 'Pomegranate',
            'bgColor1' => '#c0392b',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#c0392b',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[18] = array(
            'themeColor' => '#bdc3c7',
            'name' => 'Silver',
            'bgColor1' => '#bdc3c7',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#bdc3c7',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );

        $palletes[19] = array(
            'themeColor' => '#7f8c8d',
            'name' => 'Asbestos',
            'bgColor1' => '#7f8c8d',
            'bgImage' => './book/mesh.svg',
            'bgColor2' => '#fff',
            'fontColor1' => '#7f8c8d',
            'fontColor2' => '#fff',
            'fontColor3' => '#000',
            'fontColor4' => 'rgba(255,255,255,.65)'
        );
        return $palletes;
    }

}
