# Unboxd Cloud

Enterprise Composable Agentic Cloud Native Platform.

## Overview

Unboxd Cloud is an enterprise platform for building composable private cloud, edge cloud, and hybrid cloud environments using open-source infrastructure and agent-managed operations.

The platform combines infrastructure, identity, APIs, storage, observability, publishing, commerce, and operational services into a modular cloud-native ecosystem.

## Core Platform Architecture

### Enterprise Cloud Foundation

- OpenStack Private Cloud
- MicroCloud Edge Cloud
- Apache CloudStack Hybrid Cloud
- S3-Compatible Object Storage

### Cloud Native Operations

- Podman Container Management
- Harbor Container Registry
- Apache APISIX Gateway
- Edge Workload Distribution

### Identity & Communication

- Keycloak IAM
- Logto SSO
- Stalwart Mail Infrastructure
- Novu Notifications

### Observability & Reliability

- SigNoz Observability
- GlitchTip Error Tracking
- Monitoring & Operational Visibility

### Composable Application Services

- WordPress CMS
- WooCommerce Commerce
- Ghost Publishing
- Postiz Social Publishing

### Agentic Operations Layer

- Service-specific operational agents
- Agent orchestration
- Operational automation
- Infrastructure lifecycle management

## Deployment Models

| Deployment | Description |
|------------|-------------|
| Private Cloud | Dedicated enterprise cloud environments using OpenStack |
| Edge Cloud | Distributed edge-native infrastructure powered by MicroCloud |
| Hybrid Cloud | Multi-environment infrastructure powered by Apache CloudStack |
| Composable Cloud | Modular infrastructure and service composition |

## Enterprise Characteristics

- Multi-tenant architecture
- Cloud-native platform design
- Hybrid and edge deployment support
- Identity and access management
- API-first infrastructure
- Operational observability
- Open-source infrastructure foundation
- Agent-managed operational workflows

## Development

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Production build

```bash
npm run build
```

## GitHub Pages Deployment

The website is configured for static export deployment through GitHub Pages.

Enable:

```txt
Repository → Settings → Pages → Source → GitHub Actions
```

Deployment URL:

```txt
https://unboxd-cloud.github.io/website/
```

## Platform Documentation

See:

- `PLATFORM_ARCHITECTURE.md`
- `README.md`
- `app/page.tsx`

## Organization

GitHub Organization:

https://github.com/unboxd-cloud
