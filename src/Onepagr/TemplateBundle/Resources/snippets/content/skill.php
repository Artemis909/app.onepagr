<?php

$return = array(
	'headline' => array('content' => 'SERVICES'),
	'settings' => array('per_row' => 6, 'show_icons' => true)
);

$return['row'][] = array(
	'headline' => 'DESIGN',
	'sub_headline' => 'Brand identity',
	'icon' => 'fa fa-pencil',
	'content' => 'Our designers will be available to help you choose colors, create your logo, select fonts; to increase your online presence from your launching page to your fully fledged operation application.'
);


$return['row'][] = array(
	'headline' => 'DEVELOPMENT',
	'sub_headline' => 'We develop with you the way..',
	'icon' => 'fa fa-code',
	'content' => 'Our highly-skilled software development team of architects, back-end and front-end developers and designers use the latest programming languages and techniques in the delivery of products in an agile manner.'
);

$return['row'][] = array(
	'headline' => 'BUDGET',
	'sub_headline' => 'We help achieve within budget',
	'icon' => 'fa fa-dollar',
	'content' => 'We know cash is tight for startups and that is why we accept payments in equity.'
);

$return['row'][] = array(
	'headline' => 'TEAM RECRUITMENT',
	'sub_headline' => 'Together we will build your team',
	'icon' => 'fa fa-group',
	'content' => "It's tough times for companies trying to hire software developers. We will help you put your team together with the required skill set to maintain your product."
);


return $return;

