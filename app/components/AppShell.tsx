'use client';

import navBackIcon from '@ui5/webcomponents-icons/dist/nav-back.js';
import { Button, ShellBar } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-react/dist/Assets.js';
import { usePathname, useRouter } from 'next/navigation';

export function AppShell() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <ShellBar
        primaryTitle={'Movie Library'}
        startButton={
          pathname !== '/' && (
            <Button
              icon={navBackIcon}
              onClick={() => {
                router.back();
              }}
            />
          )
        }
      />
    </>
  );
}
