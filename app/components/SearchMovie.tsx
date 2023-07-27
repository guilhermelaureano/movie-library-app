'use client';

import navBackIcon from '@ui5/webcomponents-icons/dist/nav-back.js';
import {
  Button,
  Form,
  FormGroup,
  FormItem,
  Input,
  ShellBar,
} from '@ui5/webcomponents-react';
import '@ui5/webcomponents-react/dist/Assets.js';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export function SearchMovie() {
  const [input, setInput] = useState('');
  // const router = useRouter();
  // const pathname = usePathname();

  const handleSearch = () => {
    console.log('search');
  };

  const handleReset = () => {
    console.log('search');
  };

  const handleInput = (e: any) => {
    e.prevent.default;
    setInput(e.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: '100%',
      }}
    >
      <Input value={input} onInput={handleInput} />

      <Button onClick={handleSearch}>Search</Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
}
