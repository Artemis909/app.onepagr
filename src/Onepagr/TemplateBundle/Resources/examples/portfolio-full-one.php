<?php

$_return = array();
$_return['settings'] = array(
	'meta' => array(
		'title' => 'Malick Ceesay',
		'description' => 'Malick Ceesay',
		'keywords' => 'African artist'
	),
	'font' => array(
		'fontName' => "Lato",
		'fontFamily' => "'Lato', sans-serif;"
	),
	'userId' => 'example',
	'page' => 'portfolio-rebound-slide',
	'template' => "OnepagrTemplateBundle:Template:portfolio.plain.twig",
);




$_return['contents'] = array();

$_return['contents']['menu'] = array(
	'id' => 'menu',
	'class' => 'header-bottom',
	'template' => 'OnepagrTemplateBundle:Menu:menu.default.twig',
	'templateCss' => array('template/css/menu/style.menu.template.css'),
	'templateJs' => array(),
	'data' => array(
		'h1' => "Malick Ceesay",
		'h2' => "Artist",
		'profile' => '##baseUrl##/resized/malick/misc/malick200png',
		'h3' => "Build A Beautiful Web With Simplicity",
		"p" => "We're launching into a closed <strong>beta</strong> soon!
                    <span>Enter your email below to secure a spot.</span>",
		"colsize" => "col-md-6"
	)
);

$_return['contents']['header'] = array(
	'id' => 'header',
	'template' => 'OnepagrTemplateBundle:Header:header.flat.twig',
	'templateCss' => array('template/css/header/style.header.gradient.template.css'),
	'templateJs' => array(),
	'data' => array(
		'h1' => "Malick Ceesay",
		'h2' => "Artist",
		'profile' => '##baseUrl##/resized/malick/misc/malick200png',
		'h3' => "Build A Beautiful Web With Simplicity",
		"p" => "We're launching into a closed <strong>beta</strong> soon!
                    <span>Enter your email below to secure a spot.</span>",
		"colsize" => "col-md-6"
	)
);

$_return['contents']['service'] = array(
	'id' => 'service',
	'template' => 'OnepagrTemplateBundle:Service:service.default.twig',
	'templateCss' => array('template/css/service/style.service.template.css'),
	'templateJs' => array(),
	'data' => array(
		'h1' => "Malick Ceesay",
		'h2' => "Artist",
		'profile' => '##baseUrl##/resized/malick/misc/malick200png',
		'h3' => "Build A Beautiful Web With Simplicity",
		"p" => "We're launching into a closed <strong>beta</strong> soon!
                    <span>Enter your email below to secure a spot.</span>",
		"colsize" => "col-md-6"
	)
);

$_return['contents']['skill'] = array(
	'id' => 'skill',
	'template' => 'OnepagrTemplateBundle:Skill:skillbar.one-column.twig',
	'templateCss' => array('template/css/skill/style.skill.template.css'),
	'templateJs' => array(),
	'data' => array(
		'h1' => "Malick Ceesay",
		'h2' => "Artist",
		'profile' => '##baseUrl##/resized/malick/misc/malick200png',
		'h3' => "Build A Beautiful Web With Simplicity",
		"p" => "We're launching into a closed <strong>beta</strong> soon!
                    <span>Enter your email below to secure a spot.</span>",
		"colsize" => "col-md-6"
	)
);

$_return['contents']['timeline'] = array(
	'id' => 'timeline',
	'template' => 'OnepagrTemplateBundle:Timeline:timeline.dotted.twig',
	'templateCss' => array('template/css/timeline/style.timeline.dotted.template.css'),
	'templateJs' => array(),
	'data' => array(
		'h1' => "Malick Ceesay",
		'h2' => "Artist",
		'profile' => '##baseUrl##/resized/malick/misc/malick200png',
		'h3' => "Build A Beautiful Web With Simplicity",
		"p" => "We're launching into a closed <strong>beta</strong> soon!
                    <span>Enter your email below to secure a spot.</span>",
		"colsize" => "col-md-6"
	)
);

for ($i = 1; $i <= 10; $i++) {
	$_return['contents']['gallery']['items'][] = array(
		'h1' => 'Untitled',
		'date' => '2014',
		'thumbnail' => '##baseUrl##/media/resized/malick/250/' . $i . '.png',
		'originalImage' => '##baseUrl##/media/background/malick/original/' . $i . '.png',
		'largeImage' => '##baseUrl##/media/resized/malick/700_515/' . $i . '.png',
		'downloadImage' => '##baseUrl##/media/resized/malick/500/' . $i . '.png',
		'p' => 'Malick Ceesay'
	);
}





$_return['sectionContentMap'] = array(

	'header' => array(
		// 'template' => 'OnepagrTemplateBundle:Header:header.browser.twig',
		// 'templateCss' => array($cssTemplate),
		// 'templateJs' => array(),
		'contentId' => 'header'
	),
		'menu' => array(
		// 'template' => 'OnepagrTemplateBundle:Header:header.browser.twig',
		// 'templateCss' => array($cssTemplate),
		// 'templateJs' => array(),
		'contentId' => 'menu'
	),
	'service' => array(
		// 'template' => 'OnepagrTemplateBundle:Header:header.browser.twig',
		// 'templateCss' => array($cssTemplate),
		// 'templateJs' => array(),
		'contentId' => 'service'
	),
	'skill' => array(
		// 'template' => 'OnepagrTemplateBundle:Header:header.browser.twig',
		// 'templateCss' => array($cssTemplate),
		// 'templateJs' => array(),
		'contentId' => 'skill'
	),
	'timeline' => array(
		// 'template' => 'OnepagrTemplateBundle:Header:header.browser.twig',
		// 'templateCss' => array($cssTemplate),
		// 'templateJs' => array(),
		'contentId' => 'timeline'
	),
	
);

$_return['palettes'][0] = array(
	'themeColor' => '#2C82C9',
	'name' => 'Happy Blue',
	'bgColor1' => '#1D1A21',
	'bgImage' => '##baseUrl##/media/svg/mockups.svg',
	'bgImage2' => '##baseUrl##/media/background/picjumbo/6_Water_Food/IMG_6152.jpg',
	'bgColor2' => 'transparent',
	'bgColor3' => '#252328',
	'fontColor1' => '#444961',
	'fontColor2' => '#fff',
	'fontColor3' => '#000',
	'fontColor4' => 'rgba(255,255,255,.65)',
	'opacity' => .85,
	'borderRadius' => '4px',
	'border' => '0',
	'borderColor' => '#fff',
	'borderRadius2' => '8px',
	'fontName' => "Lato",
	'fontFamily' => "'Lato', sans-serif;",
	'blur' => '0px'
);

$_return['palettes']['0-dashed'] = array(
	'themeColor' => '#2C82C9',
	'name' => 'Happy Blue',
	'bgColor1' => '#2C82C9',
	'bgImage' => '##baseUrl##/media/svg/mockups.svg',
	'bgImage2' => '##baseUrl##/media/background/picjumbo/6_Water_Food/IMG_6152.jpg',
	'bgColor2' => 'transparent',
	'bgColor3' => 'transparent',
	'fontColor1' => '#fff',
	'fontColor2' => '#fff',
	'fontColor3' => '#000',
	'fontColor4' => 'rgba(255,255,255,.65)',
	'opacity' => .85,
	'borderRadius' => '0px',
	'border' => '1px dashed',
	'borderColor' => '#fff',
	'borderRadius2' => '8px',
	'fontName' => "Raleway",
	'fontFamily' => "'Raleway', sans-serif;"
);

$_return['palettes']['0-solid'] = array(
	'themeColor' => '#2C82C9',
	'name' => 'Happy Blue',
	'bgColor1' => '#2C82C9',
	'bgImage' => '##baseUrl##/media/svg/mockups.svg',
	'bgImage2' => '##baseUrl##/media/background/picjumbo/6_Water_Food/IMG_6152.jpg',
	'bgColor2' => 'transparent',
	'bgColor3' => 'transparent',
	'fontColor1' => '#fff',
	'fontColor2' => '#fff',
	'fontColor3' => '#000',
	'fontColor4' => 'rgba(255,255,255,.65)',
	'opacity' => .85,
	'borderRadius' => '0px',
	'border' => '1px solid',
	'borderColor' => '#fff',
	'borderRadius2' => '8px',
	'fontName' => "Raleway",
	'fontFamily' => "'Raleway', sans-serif;"
);

$_return['palettes'][1] = array(
	'themeColor' => '#2CC990',
	'name' => 'Calm Green',
	'bgColor1' => '#2CC990',
	'bgImage' => '##baseUrl##/media/svg/mesh.svg',
	'bgImage2' => '##baseUrl##/media/background/picjumbo/6_Water_Food/IMG_6152.jpg',
	'bgColor2' => '#363F48',
	'bgColor3' => '#363F48',
	'fontColor1' => '#fff',
	'fontColor2' => '#fff',
	'fontColor3' => '#000',
	'fontColor4' => 'rgba(255,255,255,.65)',
	'opacity' => .85,
	'borderRadius' => '0px',
	'border' => '0px solid',
	'borderColor' => 'transparent',
	'fontName' => "Lato",
	'fontFamily' => "'Lato', sans-serif;"
);

$_return['palettes']['1-solid'] = array(
	'themeColor' => '#2CC990',
	'name' => 'Calm Green',
	'bgColor1' => '#2CC990',
	'bgImage' => '##baseUrl##/media/svg/mockups.svg',
	'bgImage2' => '##baseUrl##/media/background/picjumbo/6_Water_Food/IMG_6152.jpg',
	'bgColor2' => 'transparent',
	'bgColor3' => 'transparent',
	'fontColor1' => '#fff',
	'fontColor2' => '#fff',
	'fontColor3' => '#000',
	'fontColor4' => 'rgba(255,255,255,.65)',
	'opacity' => .85,
	'borderRadius' => '0px',
	'border' => '1px solid',
	'borderColor' => '#fff',
	'fontName' => "Raleway",
	'fontFamily' => "'Raleway', sans-serif;"
);

$_return['palettes'][2] = array(
	'themeColor' => '#EEE657',
	'name' => 'Yello',
	'bgColor1' => '#EEE657',
	'bgImage' => '##baseUrl##/media/svg/mockups.svg',
	'bgImage2' => '##baseUrl##/media/background/picjumbo/6_Water_Food/IMG_6152.jpg',
	'bgColor2' => '#165c63',
	'bgColor3' => '#165c63',
	'fontColor1' => '#165c63',
	'fontColor2' => '#fff',
	'fontColor3' => '#000',
	'fontColor4' => 'rgba(255,255,255,.65)',
	'opacity' => 1,
	'borderRadius' => '4px',
	'border' => '0px solid',
	'borderColor' => '#464648',
	'fontName' => "Raleway",
	'fontFamily' => "'Raleway', sans-serif;",
	'boxShadow' => "0 0px #fff"
);

$_return['palettes'][3] = array(
	'themeColor' => '#FCB941',
	'name' => 'Thai Curry',
	'bgColor1' => '#FCB941',
	'bgImage' => '##baseUrl##/media/svg/mockups.svg',
	'bgImage2' => '##baseUrl##/media/background/picjumbo/6_Water_Food/IMG_6152.jpg',
	'bgColor2' => '#fff',
	'bgColor3' => '#f66',
	'fontColor1' => '#fff',
	'fontColor2' => '#fff',
	'fontColor3' => '#000',
	'fontColor4' => 'rgba(255,255,255,.65)',
	'opacity' => .85,
	'borderRadius' => '5px',
	'border' => '0px',
	'borderColor' => '#fff',
	'fontName' => "Raleway",
	'fontFamily' => "'Raleway', sans-serif;"
);

$_return['palettes'][4] = array(
	'themeColor' => '#FC6042',
	'name' => 'Burnt Red',
	'bgColor1' => '#FC6042',
	'bgImage' => '##baseUrl##/media/svg/mockups.svg',
	'bgImage2' => '##baseUrl##/media/background/picjumbo/6_Water_Food/IMG_6152.jpg',
	'bgColor2' => '#fff',
	'bgColor3' => '#B21700',
	'fontColor1' => '#fff',
	'fontColor2' => '#fff',
	'fontColor3' => '#000',
	'fontColor4' => 'rgba(255,255,255,.65)',
	'opacity' => 1,
	'borderRadius' => '0px',
	'border' => '0px',
	'borderColor' => '#fff',
	'fontName' => "Raleway",
	'fontFamily' => "'Raleway', sans-serif;"
);

$_return['palettes'][5] = array(
	'themeColor' => '#FC6042',
	'name' => 'Burnt Red',
	'bgColor1' => '#FC6042',
	'bgImage' => '##baseUrl##/media/background/unsplash/unsplash-kitsune-3.jpg',
	'bgImage2' => '##baseUrl##/media/background/unsplash/EpBHfTrtRLa2PCPwuXkQ_thessaloniki_port.jpg',
	'bgColor2' => '#fff',
	'bgColor3' => '#FC6042',
	'fontColor1' => '#fff',
	'fontColor2' => '#fff',
	'fontColor3' => '#000',
	'fontColor4' => 'rgba(255,255,255,.65)',
	'opacity' => 0.85,
	'borderRadius' => '4px',
	'border' => '0px',
	'borderColor' => '#fff',
	'fontName' => "Raleway",
	'fontFamily' => "'Raleway', sans-serif;"
);

$_return['palettes'][6] = array(
	'themeColor' => '#FC6042',
	'name' => 'Burnt Red',
	'bgColor1' => '#FC6042',
	'bgImage' => '../img/bag-and-hands.jpg',
	'bgImage2' => '../img/fruit_1.jpg',
	'bgColor2' => '#fff',
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
	'fontName' => "Raleway",
	'fontFamily' => "'Raleway', sans-serif;"
);

$_return['palettes'][7] = array(
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

$_return['palettes'][8] = array(
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
	'fontName' => "Raleway",
	'fontFamily' => "'Raleway', sans-serif;"
);

$_return['palettes'][9] = array(
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
	'fontName' => "Raleway",
	'fontFamily' => "'Raleway', sans-serif;"
);

$_return['palettes'][10] = array(
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
	'fontName' => "Raleway",
	'fontFamily' => "'Raleway', sans-serif;"
);

$_return['palettes'][11] = array(
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
	'fontName' => "Raleway",
	'fontFamily' => "'Raleway', sans-serif;"
);

$_return['palettes'][14] = array(
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
	'fontName' => "Raleway",
	'fontFamily' => "'Raleway', sans-serif;"
);

$_return['palettes'][15] = array(
	'themeColor' => '#2C82C9',
	'name' => 'Happy Blue',
	'bgColor1' => '#bfaf70',
	'bgImage' => '##baseUrl##/media/svg/mockups.svg',
	'bgImage2' => '##baseUrl##/media/background/picjumbo/6_Water_Food/IMG_6152.jpg',
	'bgColor2' => '#37bee8',
	'bgColor3' => '#252328',
	'fontColor1' => '#fff',
	'fontColor2' => '#fff',
	'fontColor3' => '#000',
	'fontColor4' => 'rgba(255,255,255,.65)',
	'opacity' => .85,
	'borderRadius' => '4px',
	'border' => '0',
	'borderColor' => '#fff',
	'borderRadius2' => '8px',
	'fontName' => "Lato",
	'fontFamily' => "'Lato', sans-serif;",
	'blur' => '0px'
);


return $_return;
