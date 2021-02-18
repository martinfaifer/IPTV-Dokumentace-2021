<?php

namespace App\Http\Controllers;

use phpseclib3\Net\SSH2;

class SshController extends Controller
{
    public static function connect_and_run_command($deviceIp, $username, $password, $command): void
    {
        $ssh = new SSH2($deviceIp, 22);
        $ssh->login($username, $password);
        $ssh->exec($command);
    }
}
