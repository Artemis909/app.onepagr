<?php

namespace Onepagr\TemplateBundle\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Gregwar\Image\Image;

class ResizeDownloadedCommand extends ContainerAwareCommand {

	private $counter;
	
	private $images;

	protected function configure() {
		$this
				->setName('resizedownloadedimages')
				->setDescription('Resizes Downloaded Images')
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

	protected function isImage($file) {
		if (is_array(getimagesize($file))) {
			$return = true;
		} else {
			$return = false;
		}
		return $return;
	}

	protected function process($folder, $source, $target, $size, $output) {
		$dir = new \DirectoryIterator($folder);

		foreach ($dir as $fileinfo) {
			try {
				if ($fileinfo->isDir() && !$fileinfo->isDot()) {
					$output->writeln('<info>' . 'Folder : ' . $fileinfo->getPathname() . '</info>');
					$this->process($fileinfo->getPathname(), $source, $target, $size, $output);
				} else if ($fileinfo->isFile() && !$fileinfo->isDot() && $this->isImage($fileinfo->getPathname())) {
					$output->writeln('File : ' . $fileinfo->getPathname());

					$from = $fileinfo->getPathname();
					$to = str_replace($source, $target, $fileinfo->getPathname());
					$to = str_replace(" ", "_", $to);
					$dir = dirname($to);

					if (!file_exists($dir)) {
						mkdir($dir, 0777, true);
					}

					$image = Image::open($from);
					$width = $size[0];
					$height = $size[1];

				

						if ($image->width() > $image->height()) {
							
							$height = null;
						} else {
							$width = null;
						}


						
						$image->resize($width, $height)->save($to);

						//$image->cropResize(200)
								//->save($to);
					
					unset($image);
				} else {
					$output->writeln('<error>' . 'File not n image : ' . $fileinfo->getPathname() . '</error>');
				}
			} catch (\Exception $e) {
				$output->writeln('<error>' . $e->getMessage() . '</error>');
			}
		}
	}

	protected function execute(InputInterface $input, OutputInterface $output) {

		$folders = array(
			'/Users/pjabang/Projects/xam-image-creator/images/' => array(
				'unsplash'
			)
		);

		$folders = array(
			'/Users/pjabang/Projects/xam-image-creator/images/' => array(
				'picjumbo'
			)
		);
		
		$folders = array(
			'/Users/pjabang/Projects/xam-image-creator/images/media/background/' => array(
				'malick', 'unsplash', 'picjumbo', 'skalgubbar'
			)
		);

		$target = '/Users/pjabang/Projects/xam-image-creator/images/media/thumbnail/';
		
		$folders = array(
			'/Users/pjabang/Projects/xam-image-creator/images/media/background/' => array(
				'malick'
			)
		);

		$target = '/Users/pjabang/Projects/xam-image-creator/images/media/resized/700_515/';


		$sizes = array(array(700, 515));
		foreach ($folders AS $source => $array) {
			foreach ($array AS $value) {
				$folder = $source . $value;
				$output->writeln('<info>' . 'Process Folder : ' . $folder . '</info>');
				$this->process($folder, $source, $target, $sizes[0], $output);
			}
		}
		
	}



}
