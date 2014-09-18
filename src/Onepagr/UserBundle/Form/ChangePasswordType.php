<?php

namespace Onepagr\UserBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class ChangePasswordType extends AbstractType
{
    /**
     * @var string
     *
     * Data class
     */
    protected $dataClass;
    
    /**
     * Constructor
     */
    public function __construct($dataClass = null)
    {
        $this->dataClass = $dataClass;
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('password', 'repeated', array(
                'type' => 'password',
                'invalid_message' => 'nedwave_user.password.invalid',
                'options' => array(),
                'required' => true,
                'first_options'  => array('label' => 'form.password.first_new'),
                'second_options' => array('label' => 'form.password.second_new'),
            ));
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => $this->dataClass,
            'translation_domain' => 'NedwaveUserBundle'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'nedwave_user_change_password';
    }
}
