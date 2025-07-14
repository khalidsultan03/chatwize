create table public.tenants (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  stripe_customer_id text
);

create table public.users (
  id uuid primary key,
  tenant_id uuid references public.tenants(id),
  email text,
  is_owner boolean default false
);

create table public.service_accounts (
  tenant_id uuid references public.tenants(id) primary key,
  wa_permanent_token text,
  wa_phone_id text,
  wa_waba_id text,
  botpress_agent_id text
);

create table public.leads (
  id bigserial primary key,
  tenant_id uuid references public.tenants(id),
  phone text,
  payload jsonb,
  created_at timestamptz default now()
);

alter table public.tenants enable row level security;
alter table public.users enable row level security;
alter table public.service_accounts enable row level security;
alter table public.leads enable row level security;

/* Policies would be added separately, as per comment: user.tenant_id = record.tenant_id */ 