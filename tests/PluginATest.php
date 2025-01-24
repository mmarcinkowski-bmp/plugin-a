<?php

declare(strict_types=1);

namespace MmarcinkowskiBmp\Plugin\PluginA\Tests;

use MmarcinkowskiBmp\Plugin\PluginA\PluginA;
use PHPUnit\Framework\TestCase;

class PluginATest extends TestCase
{
    public function testPlugin()
    {
        $plugin = new PluginA();
        $this->assertInstanceOf(PluginA::class, $plugin);
        $this->assertEquals('Hello from PluginA', $plugin->action());
    }
}
