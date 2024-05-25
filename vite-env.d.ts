/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_FB_KEY: string;
	readonly VITE_FB_DOMAIN: string;
	readonly VITE_FB_PROJECT_ID: string;
	readonly VITE_FB_STORAGE_BUCKET: string;
	readonly VITE_FB_SENDER_ID: string;
	readonly VITE_FB_APP_ID: string;
	readonly VITE_FB_MEASUREMENT_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
