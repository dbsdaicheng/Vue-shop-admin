/// <reference types="vite/client" />
declare module 'mockjs'
declare module 'router/router.ts'
declare module '*.ts'
declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
