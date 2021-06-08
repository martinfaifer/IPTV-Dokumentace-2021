<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendNotification extends Mailable
{
    use Queueable, SerializesModels;

    // definice vstupů
    public $user; // kdo provedl změnu
    public $item; // jaká položka byla změnena
    public $type; // zda se jedná o vytvorení, editaci nebo smazání


    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(string $user, string $item, string $type)
    {
        $this->user = $user;
        $this->item = $item;
        $this->type = $type;
    }

    /**
     * vytvorení ceskéjo formátu pro predmet do mailu
     *
     * @param string $orignalType
     * @return string
     */
    public function create_subjectType(string $orignalType): string
    {
        if ($this->type === "editoval") {
            return "editován";
        }

        if ($this->type === "vytvořil") {
            return "vytvořem";
        }

        if ($this->type === "smazal") {
            return "smazán";
        }

        if ($this->type === 'error500') {
            return $this->type;
        }
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('sendNotification')
            ->subject($this->item . " byl " . $this->create_subjectType($this->type));
    }
}
