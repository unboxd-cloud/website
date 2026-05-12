# Enterprise Architecture

Unboxd Cloud is organized as a composable enterprise cloud platform with independent layers that can be deployed, governed, and scaled according to organizational requirements.

## Architecture Principles

- Composable platform services
- Cloud-native infrastructure foundation
- Private, edge, and hybrid deployment support
- Open-source control plane components
- Agent-assisted operational lifecycle
- Enterprise governance and observability

## Logical Layers

### 1. Cloud Foundation Layer

Provides core compute, storage, and network infrastructure.

Components:
- OpenStack Private Cloud
- MicroCloud Edge Cloud
- Apache CloudStack Hybrid Cloud
- S3-Compatible Object Storage

### 2. Cloud Native Operations Layer

Provides workload lifecycle, registry, routing, and runtime operations.

Components:
- Podman
- Harbor
- Apache APISIX
- Edge workload routing

### 3. Identity and Access Layer

Provides enterprise authentication, authorization, and single sign-on.

Components:
- Keycloak
- Logto
- IAM policy integration
- SSO integration

### 4. Observability and Reliability Layer

Provides visibility across infrastructure, services, applications, and agents.

Components:
- SigNoz
- GlitchTip
- Logs, metrics, and traces
- Alerts and service health

### 5. Application Services Layer

Provides composable business and digital platform services.

Components:
- WordPress
- WooCommerce
- Ghost
- Postiz

### 6. Agentic Operations Layer

Provides service-domain automation and operational support.

Capabilities:
- Provisioning
- Configuration
- Monitoring
- Remediation
- Lifecycle management
- Documentation support

## Enterprise Fit

The platform is intended for organizations that require infrastructure ownership, deployment flexibility, service modularity, and operational depth across private, hybrid, and edge environments.
