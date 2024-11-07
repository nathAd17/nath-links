<template>
    <div class="isolate h-dvh w-screen overflow-y-auto bg-gray-100 font-inter dark:bg-gray-700">
        <svg class="absolute -top-[23em] -z-10 h-full w-full stroke-slate-300 [mask-image:radial-gradient(100%_100%_at_top_right,gray,black,transparent)] dark:stroke-white/10"
            aria-hidden="true">
            <defs>
                <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="100%" y="-1"
                    patternUnits="userSpaceOnUse">
                    <path d="M.5 200V.5H200" fill="none"></path>
                </pattern>
            </defs>
            <svg x="50%" y="-1" class="overflow-visible fill-gray-50 dark:fill-gray-800/20">
                <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                    stroke-width="0"></path>
            </svg>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)">
            </rect>
        </svg>
        <div class="absolute left-0 top-10 -z-10 hidden transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            aria-hidden="true">
            <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                style="clip-path:polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)">
            </div>
        </div>
        <div
            class="mx-auto my-0 h-auto w-screen border-gray-400 bg-opacity-20 bg-clip-padding backdrop-blur-md backdrop-filter md:my-8 md:w-[30rem] md:rounded-xl md:border md:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <header class="z-50">
                <div class="mx-auto flex w-full max-w-sm items-center justify-center py-8">
                    <!-- header -->
                    <div class="mx-auto flex flex-col items-center pb-10">
                        <img class="mb-3 h-40 w-40 rounded-full object-cover shadow-md shadow-yellow-300" src="/profile.jpg"
                            alt="profil" />
                            <div class="link" v-for="ln in links" :key="ln.id">
                                <a v-if="ln.id===3" :href="ln.url" class="mb-1 text-xl font-medium text-gray-900 dark:text-white">@nath.ad17</a>
                            </div>
                        <div class="mt-4 flex md:mt-6">
                            <label class="switch relative z-50 inline-flex cursor-pointer items-center"
                                for="dark-toggle">
                                <input class="input peer hidden shadow-lg" id="dark-toggle" type="checkbox"
                                    @change="toggleDarkMode" :checked="isDarkMode" />
                                <div
                                    class="relative h-[40px] w-[100px] rounded-full bg-white from-orange-500 to-yellow-400 shadow-lg duration-300 after:absolute after:left-[7px] after:top-[2px] after:h-[35px] after:w-[35px] after:rounded-full after:bg-gradient-to-r after:shadow-lg after:duration-300 after:content-[''] active:after:w-[20px] peer-checked:bg-zinc-500 peer-checked:after:left-[93px] peer-checked:after:translate-x-[-100%] peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900">
                                </div>
                                <svg height="0" width="80" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute left-[13px] h-6 w-6 fill-white peer-checked:opacity-60">
                                    <path
                                        d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z">
                                    </path>
                                </svg>
                                <svg height="492" width="492" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute right-[13px] h-6 w-6 fill-black opacity-60 peer-checked:fill-white peer-checked:opacity-70">
                                    <path
                                        d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z">
                                    </path>
                                </svg>
                            </label>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div class="relative px-2 pt-2">
                    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-60"
                        aria-hidden="true">
                        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                        </div>
                    </div>
                    <div class="z-50 mx-4 max-w-2xl py-2 md:mx-auto">
                        <!-- menus -->
                        <div class="mx-auto mb-4 flex w-full flex-row items-center justify-start rounded-2xl border border-gray-600 p-2 dark:border-gray-400 md:mb-8 md:w-3/4 md:p-4"
                            v-for="link in links" :key="link.id">
                            <a :href="link.url" target="_blank" class="w-full rounded-xl">
                                <div class="flex items-center justify-start gap-4">
                                    <img :src="getIcon(link.url)" alt="logo" class="h-10 w-10 rounded-full border border-gray-500 p-1">
                                    <h1 class="text-lg font-bold text-gray-900 dark:text-white">
                                        {{link.label}}
                                    </h1>
                                </div>
                            </a>
                            <div class="relative">
                                <!-- button copy to clipboard -->
                                <button @click="copy(link)" class="rounded-full bg-gray-300 p-2 dark:bg-gray-500">
                                    <template v-if="link.isCopied">
                                        <svg class="h-6 w-6 text-gray-800 dark:text-white" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                            viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                                        </svg>

                                    </template>
                                    <template v-else>
                                        <svg class="h-6 w-6 text-gray-800 dark:text-white" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                            viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                                                d="M9 8v3a1 1 0 0 1-1 1H5m11 4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1m4 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L7.7 8.35A1 1 0 0 1 8.46 8H13a1 1 0 0 1 1 1Z" />
                                        </svg>
                                    </template>
                                </button>
                                <div v-if="link.isCopied"
                                    class="absolute left-1/2 top-[-2.5rem] -translate-x-1/2 transform rounded bg-gray-700 px-2 py-1 text-xs text-white dark:bg-gray-200 dark:text-gray-700">
                                    Copied!
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="absolute inset-x-0 -top-80 right-40 -z-50 transform-gpu overflow-hidden blur-3xl"
                        aria-hidden="true">
                        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-cyan-600 to-cyan-300 opacity-30 dark:from-[#ff80b5] dark:to-[#9089fc] sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

</template>
<script setup>
import { ref, onMounted } from 'vue';
const links = ref([
    { id: 1, label: 'Portfolio', url: 'https://vnath-portfolio.vercel.app/', logo: '', isCopied: false },
    { id: 2, label: 'Github', url: 'https://github.com/nathAd17/', logo: '', isCopied: false },
    { id: 3, label: 'Instagram', url: 'https://www.instagram.com/nath.ady', logo: '', isCopied: false },
    { id: 4, label: 'Facebook', url: 'https://www.facebook.com/', logo: '', isCopied: false }
]);
const isDarkMode = ref(false);

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark', isDarkMode.value);
    localStorage.setItem('darkMode', isDarkMode.value);
};
const copy = (link) => {
    navigator.clipboard.writeText(link.url).then(() => {
        link.isCopied = true;
        setTimeout(() => {
            link.isCopied = false;
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
};
const getIcon = (url) => {
    if (url.includes('github.com')) return '/github.svg';
    if (url.includes('tiktok.com')) return '/tiktok.svg';
    if (url.includes('youtube.com')) return '/youtube.svg';
    if (url.includes('vercel.app')) return '/vercel.svg';
    if (url.includes('facebook.com')) return '/facebook.svg';
    if (url.includes('instagram.com')) return '/instagram.svg';
    if (url.includes('whatsapp.com')) return '/whatsapp.svg';
    if (url.includes('twitter.com')) return '/x.svg';
    // tambahkan kondisi lain sesuai kebutuhan
    return '/Globe.svg'; // icon default jika tidak ditemukan
};
onMounted(() => {
    isDarkMode.value = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
    }
});
</script>
<script>
</script>