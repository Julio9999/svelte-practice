<script lang="ts">
  
  import { goto } from "$app/navigation";
  import { AuthService } from "@services/auth/auth.service";


  const form = {
    email: "",
    password: "",
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    try {
      const res = await AuthService.login(form);
      goto("/");
      console.log(res);
    } catch (error) {}
  };
</script>

<div
  class="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 w-full"
>
  <div class="max-w-md w-full mx-4">
    <div class="bg-white p-8 rounded-2xl shadow-xl space-y-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">
          Bienvenido
        </h2>
        <p class="mt-2 text-sm text-gray-600">Inicia sesión en tu cuenta</p>
      </div>

      <form class="space-y-6" on:submit={handleSubmit}>
        <div class="space-y-4">
          <div>
            <label
              for="email-address"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Correo electrónico
            </label>
            <div class="relative">
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm placeholder-gray-400
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                       transition duration-150 ease-in-out"
                placeholder="tu@ejemplo.com"
                bind:value={form.email}
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Contraseña
            </label>
            <div class="relative">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm placeholder-gray-400
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                       transition duration-150 ease-in-out"
                placeholder="••••••••"
                bind:value={form.password}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm
                 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                 transition duration-150 ease-in-out cursor-pointer"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  </div>
</div>
