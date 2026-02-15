'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [users, setUser] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then(setUser);
  }, []);

  return (
    <div>Hello {users.length > 0 ? users.map((user) => user.username).join(', ') : 'No users'}</div>
  );
}
