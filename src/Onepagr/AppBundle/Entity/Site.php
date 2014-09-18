<?php

namespace Onepagr\AppBundle\Entity;

use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Table(name="onepagr_sites")
 * @ORM\Entity()
 */
class Site
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;
	
	/**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=50)
     * 
     * 
     */
	protected $name;
	
	/**
     * @var integer
     *
     * @ORM\Column(name="user_id", type="integer")
     * 
     * 
     */
	protected $userId;

	/**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }
	
	
	public function getAddress() {
		return $this->address;
	}

	public function getUserId() {
		return $this->userId;
	}

	public function setAddress($address) {
		$this->address = $address;
	}

	public function setUserId($userId) {
		$this->userId = $userId;
	}


	
	
}