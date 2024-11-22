<template>
  <NuxtLayout>
    <header>
      <h1>Navigation</h1>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/fetch-server-routes">Fetch Server Routes</NuxtLink>
          </li>
          <li><NuxtLink to="/client-side">Client Side</NuxtLink></li>
          <li>
            <NuxtLink to="/test-param/1234">Client Side (Param)</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/catchAll/my-id-1337"
              >Client Side (catch all)</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/sentry-example-page">Sentry Example Page</NuxtLink>
          </li>

          <li><NuxtLink to="/404">404</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <hr />

    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts"></script>
