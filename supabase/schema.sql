-- Create deliveries table
create table if not exists deliveries (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) not null,
  platform text not null, -- 'UberEats', 'DoorDash', etc.
  amount numeric not null,
  pension_cut numeric not null, -- The calculated 1% or whatever rate
  status text default 'pending', -- 'pending', 'settled'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS Policies (Simple for now)
alter table deliveries enable row level security;

create policy "Users can view their own deliveries"
  on deliveries for select
  using ( auth.uid() = user_id );

create policy "Users can insert their own deliveries"
  on deliveries for insert
  with check ( auth.uid() = user_id );
