<?php

namespace Onepagr\TemplateBundle\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Gregwar\Image\Image;

class ResizeCommand extends ContainerAwareCommand {

	protected function configure() {
		$this
				->setName('resize')
				->setDescription('Resizes Images')
		/** ->addArgument(
		  'name',
		  InputArgument::OPTIONAL,
		  'Who do you want to greet?'
		  )
		  ->addOption(
		  'yell',
		  null,
		  InputOption::VALUE_NONE,
		  'If set, the task will yell in uppercase letters'
		  )* */
		;
	}

	protected function execute(InputInterface $input, OutputInterface $output) {

		$sizes = array(250, 300, 500);
		$path = $this->getContainer()->get('kernel')->getRootDir() . '/../web/profile/malickceesay/media/img';

		$fromDir = $path . '/original/';



		$dir = new \DirectoryIterator($fromDir);
		foreach ($sizes AS $size) {
			$toDir = $path . '/' . $size . '/';
			foreach ($dir as $fileinfo) {
				if ($fileinfo->isFile() && !$fileinfo->isDot()) {
					$this->resizeAndCrop($fileinfo, $toDir, $size, $output);
				}
			}
		}
	}

	public function resizeAndCrop($fileinfo, $toDir, $size, $output) {

		$from = $fileinfo->getPathname();
		$to = $toDir . '/' . $fileinfo->getFilename();
		try {


			$image = Image::open($from);
			$width = $height = $size;
			if ($image->width() > $image->height()) {
				$width = null;
			} else {
				$height = null;
			}
			$image->resize($width, $height)
					->crop(0, 0, $size, $size)
					->save($to);
		} catch (\Exception $e) {
			$output->writeln($e->getMessage());
		}
		$output->writeln($from);
		$output->writeln($to);
	}

}
