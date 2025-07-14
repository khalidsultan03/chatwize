create table public.service_accounts (
  tenant_id uuid references public.tenants(id) primary key,
  manychat_api_token text,
  manychat_page_id text
); 