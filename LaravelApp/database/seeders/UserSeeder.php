<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'id' => '1',
            'name' => 'Future',
            'email' => 'iamsoulfuller@gmail.com',
            'password' => '$2y$12$RcihaPx8863Y9ptL5dmyIOs/fOG9Iym.vT9QHlmZicotKvmR0SGlK'
        ]);
    }
}
