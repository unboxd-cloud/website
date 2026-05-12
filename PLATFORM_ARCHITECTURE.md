# Unboxd Cloud - Enterprise SaaS Platform Architecture

> A Cloud For Common Man | Built and deployed globally by Autonomyx

## Deployment Options

| Option | Description |
|--------|-------------|
| Cloud | Managed SaaS anywhere |
| Self-Hosted | Self-host anywhere |
| Decentralized | Distributed deployment |
| Enterprise | Enterprise SaaS |
| Composable | Mix and match components |
| - Database | Plug your own DB |
| - LLM API | Bring your own LLM |
| - Storage | Plug your own storage |
| Micro Cloud | Edge + small footprint |
| Private Cloud | OpenStack deployment |
| Hybrid Cloud | CloudStack deployment |

## Common Infrastructure

### Unboxd Auth Server (IAM)
| Service | Description |
|--------|-------------|
| **Authentication** | OAuth 2.0, OIDC, SAML |
| **Usage** | All platforms use Unboxd Auth Server |

### Unboxd Mail Server
| Service | Description |
|--------|-------------|
| **Email** | SMTP, IMAP, POP3 |
| **Usage** | All platforms use Unboxd Mail Server |

### Unboxd Commerce & Marketplace
| Service | Description |
|--------|-------------|
| **E-commerce** | Product catalog, cart, checkout |
| **Usage** | All platforms use Unboxd Commerce |

---

## Platform Catalog

### 1. Commerce/E-commerce
| Repo | Description | Endpoint |
|------|-------------|----------|
| `commerce` | Mercur (Medusa v2 multi-vendor marketplace) | marketplace.unboxd.cloud |

### 2. Real Estate Management
| Repo | Description | Endpoint |
|------|-------------|----------|
| openautonomyx/localstays | Property listings, tenant portal, lease management | - |
| `real-estate-management` | Additional real estate services | - |

### 3. Travel & Hospitality
| Repo | Description | Endpoint |
|------|-------------|----------|
| `travel-hospitality` | Hotel PMS, booking engine, channel manager | - |

### 4. Restaurant Management
| Repo | Description | Endpoint |
|------|-------------|----------|
| `restaurant-management` | Restaurant POS, menu, KDS, staff scheduling | - |

### 5. Retail SaaS Platform
| Repo | Description | Endpoint |
|------|-------------|----------|
| `retail-saas-platform` | Retail POS, inventory, e-commerce, loyalty | - |

### 6. Hyperlocal Services
| Repo | Description | Endpoint |
|------|-------------|----------|
| `hyperlocal-services` | Service providers, customers, delivery agents | - |

### 7. Hyperlocal Social Network
| Repo | Description | Endpoint |
|------|-------------|----------|
| `hyperlocal-social` | Social feed, local discovery, marketplace | - |

### 8. Hyperlocal Privacy Networking
| Repo | Description | Endpoint |
|------|-------------|----------|
| `hyperlocal-privacy` | Intent matching, privacy-first networking | - |

### 9. Google Maps Agent
| Repo | Description | Endpoint |
|------|-------------|----------|
| openautonomyx/Mapr | Google Maps AI agent | - |

### 10. Verified Services
| Service | Description |
|--------|-------------|
| Trust Scores | Business/provider ratings |
| Identity Verification | ID verification |
| Background Checks | Background screening |
| Reviews | Verified reviews |
| Badges | Trust badges |

### 11. Swymsetu
| Service | Description |
|--------|-------------|
| Business Tools | All-in-one toolkit |
| AI Assistant | Business AI helper |
| Payments | Payment processing |
| Scheduling | Appointment booking |
| Marketing | Local marketing |

### 12. TechForTomorrow
| Service | Description |
|--------|-------------|
| Tech News | Technology news |
| Tutorials | Learning tutorials |
| Courses | Online courses |
| Community | Tech community |
| Resources | Tech resources |

### 13. CrowdFunding Platform
| Service | Description |
|--------|-------------|
| Tech Research | Next-gen research |
| Campaign | Fundraising |
| Backers | Supporter network |
| Milestones | Project milestones |
| Rewards | Backer rewards |

### 14. Edge Cloud Platform
| Service | Description |
|--------|-------------|
| Edge Computing | Distributed compute |
| CDN | Global content delivery |
| Edge Storage | Edge caching |
| Edge Networking | Low-latency networking |
| Edge Security | Edge protection |

### 10. ERP (Enterprise Resource Planning)
| Service | Description |
|--------|-------------|
| ERP Platform | Enterprise resource planning |
| Accounting | Financial management |
| HR Management | Human resources |
| CRM | Customer relationship management |
| Inventory | Stock management |

### 9. Apache CloudStack
| Service | Description |
|--------|-------------|
| CloudStack | IaaS cloud platform |
| Virtual Machines | VM provisioning |
| Network | Virtual networking |
| Storage | Cloud storage |
| Templates | VM templates |

### 10. Private Cloud (OpenStack)
| Service | Description |
|--------|-------------|
| OpenStack | Private cloud platform |
| Nova | Compute service |
| Neutron | Networking |
| Cinder | Block storage |
| Keystone | Identity |
| Glance | Image service |

### 11. Marketing & Analytics Platform
| Repo | Description | Endpoint |
|------|-------------|----------|
| `publish` | Postiz (social media scheduling) | publish.unboxd.cloud |
| `marketing-platorm` | Mautic deployment | - |
| Google Ads | Advertising campaign management | PPC & display ads |
| Social Media | Multi-platform social management | Scheduling & engagement |
| Google Tag Manager | Tag management |
| Google Analytics | Website traffic & user behavior |
| A/B Testing | Split testing & experimentation |

### 12. Customer Data Platform (CDP)
| Service | Description |
|--------|-------------|
| Apache Unomi | Customer profile server |
| RudderStack | Customer data pipelines |
| Malta | Customer journey orchestration |
| Segment | Customer data platform |

### 13. Reputation Management
| Service | Description |
|--------|-------------|
| Review Management | Online review monitoring |
| Sentiment Analysis | Brand sentiment tracking |
| Social Listening | Social media monitoring |
| Brand Alerts | Brand mentions |

### 9. Customer Experience Management
| Service | Description |
|--------|-------------|
| Experience Analytics | User experience insights |
| Feedback Collection | Customer feedback surveys |
| NPS Tracking | Net promoter score |
| Heatmaps | User behavior visualization |

### 10. Employee Skill Management
| Service | Description |
|--------|-------------|
| Skill Tracking | Employee skill profiles |
| Learning Management | Training & courses |
| Certification | Credentials &certifications |
| Performance Reviews | Employee evaluations |
| Competency Mapping | Skills & gaps analysis |

### 10. Developer Skill Management
| Service | Description |
|--------|-------------|
| Code Rankings | Developer rankings |
| Pull Request Analytics | Code review metrics |
| Bug Tracking | Issue resolution |
| Tech Debt | Technical debt tracking |
| Skill Badges | Developer achievements |

### 11. Project Management
| Repo | Description | Endpoint |
|------|-------------|----------|
| `projecttrack` | Multi-tenant Project Management as a Service | - |

### 12. Collaboration & Productivity
| Service | Description |
|--------|-------------|
| Nextcloud | File sync & collaboration |
| OnlyOffice | Document editing |
| Jitsi | Video conferencing |
| Mattermost | Team chat |
| Bookstack | Wiki & knowledge base |

### 13. Data Platform
| Service | Description |
|--------|-------------|
| `database` | Baserow (No-code database) |
| `search-as-a-service` | OpenSearch |
| Apache Superset | BI & visualization |
| Apache Druid | OLAP & real-time analytics |
| ETL Pipeline | Data integration |

### 14. Cloud Storage
| Service | Description |
|--------|-------------|
| MinIO | S3-compatible object storage |
| Rook/Ceph | Distributed storage |
| Longhorn | Cloud-native storage |
| JuiceFS | Distributed filesystem |
| CDN | Content delivery |

### 15. Data Governance
| Service | Description |
|--------|-------------|
| DataHub | Metadata & data discovery |
| Great Expectations | Data quality validation |
| OpenLineage | Data lineage tracking |
| Apache Atlas | Metadata & governance |
| Ranger | Data access control |

### 16. Product Analytics
| Service | Description |
|--------|-------------|
| `OpenPanel` | Analytics & metrics dashboard |
| PostHog | Product analytics & feature flags |

### 17. Engineering Analytics
| Service | Description |
|--------|-------------|
| GlitchTip | Error tracking & monitoring |
| Sentry | Error tracking & performance |
| OpenTelemetry | Observability framework |
| Engineering Metrics | Dev performance & reliability |

### 18. Identity & Access Management (IAM)
| Repo | Description | Protocol |
|------|-------------|----------|
| `Unboxd-AuthServer` | Open Source Cloud Native IAM Platform | OIDC, OAuth 2.0, SAML |

### 19. Identity Fabric Platform
| Service | Description |
|--------|-------------|
| FreeIPA | Identity management system |
| Keycloak | Identity & access management |
| Dex | SSO identity provider |
| OpenLDAP | Directory service |
| Authelia | MFA & authentication |

### 20. API Gateway
| Repo | Description | Purpose |
|------|-------------|----------|
| `apisix` | Cloud-Native API Gateway and AI Gateway | API routing & load balancing |

### 21. AI / ML Infrastructure
| Repo | Description | Purpose |
|------|-------------|----------|
| `model-runner` | Unboxd Model Runner | AI model execution |
| `mcp-gateway` | MCP Gateway | Kubernetes MCP routing |

### 22. AI Research Platform
| Service | Description |
|--------|-------------|
| Research Models | AI research models |
| Model Zoo | Pre-trained models |
| Dataset Repository | Research datasets |
| Experiment Tracking | ML experiments |
| Papers | Research papers |

### 23. Agent Platform
| Service | Description |
|--------|-------------|
| AI Agents | Autonomous agents |
| Agent Orchestration | Multi-agent coordination |
| Agent Memory | Persistent agent state |
| Tool Registry | Agent capabilities |
| Agent Monitoring | Agent performance |

### 24. DevOps & Infrastructure
| Repo | Description | Purpose |
|------|-------------|----------|
| `unboxd-infra` | Infrastructure manifests | Docker-compose, Caddy, GHA |
| `container-manager` | Container management | - |

### 25. IoT Platform
| Service | Description |
|--------|-------------|
| Device Management | IoT device management |
| Sensor Data | Sensor data collection |
| Edge Connectivity | IoT edge connectivity |
| Protocol Support | MQTT, CoAP, HTTP |
| Device Registry | Device inventory |

### 26. Additional Platforms
| Repo | Description |
|------|-------------|
| `webhostingpanel` | Web hosting control panel |
| `business-process-automation` | Business process automation |
| `AgencyOS` | Agency operating system |
| `app-builder` | Application builder |

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    Unboxd Cloud Platform                     │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   Commerce  │  │  Marketing   │  │  Project    │       │
│  │  Platform   │  │  Automation  │  │  Management │       │
│  └──────┬─────┘  └──────┬─────┘  └──────┬─────┘       │
│         │               │               │                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │    Data     │  │     IAM      │  │   Project    │       │
│  │  Analytics  │  │  AuthServer  │  │  Management  │       │
│  │  Platform   │  │              │  │              │       │
│  └──────┬─────┘  └──────┬─────┘  └──────┬─────┘       │
│         │               │               │                │
│              Shared Infrastructure Layer                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │    APISIX   │  │     MCP     │  │  Container  │  │    AI       │ │
│  │   Gateway  │  │   Gateway  │  │  Manager    │  │  ModelRunner│ │
│  └────────────┘  └─────────────┘  └──────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## Deployment

All services are deployed via Docker with Caddy reverse proxy.

- **Infrastructure**: `unboxd-infra` repo contains docker-compose manifests
- **Web Server**: Caddy for SSL termination
- **Workflows**: GitHub Actions for CI/CD

---

## Technologies

- **Container**: Docker, Kubernetes
- **Gateway**: Apache APISIX
- **Database**: PostgreSQL, Baserow
- **Search**: OpenSearch
- **Auth**: OIDC, OAuth 2.0, SAML

---

*Generated from unboxd-cloud organization*  
*Last updated: 2026-05-12*