"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

// icons
import UserIcon from "../../../public/img/user.png";
import document from "../../../public/img/document.png";
import IDEs from "../../../public/img/IDEs.png";
import version from "../../../public/img/version.png";
import backend from "../../../public/img/backend.png";
import database from "../../../public/img/database.png";
import mobile from "../../../public/img/mobile.png";
import desktop from "../../../public/img/desktop.png";
import frontend from "../../../public/img/frontend.png";
import devops from "../../../public/img/devops.png";
import Iot from "../../../public/img/Iot.png";
import test from "../../../public/img/test.png";
import datasience from "../../../public/img/datasience.png";
import Observability from "../../../public/img/Observability.png";
import network from "../../../public/img/network.png";
import build from "../../../public/img/build.png";
import packageicon from "../../../public/img/packageicon.png";

  const Technologys = () => {
   const t = useTranslations("TechnologyMapps");
    const allData = [
    { title: t("language"), 
      icon: UserIcon, 
      data: [
          "Kotlin",
          "Java",
          "JavaScript",
          "TypeScript",
          "Groovy",
          "Clojure",
          "Rust",
          "WebAssembly",
          "Python",
          "C#",
          "Delphi",
          "Swift",
          "Bash (shell/sh)",
          "PowerShell",
          "HTML",
          "CSS & SCSS",
          "JSON",
          "YAML",
          "SQL",
        ] },
    {
      title: t("document"),
      icon: document,
      data: [
          {
            title: "Formats",
            data: ["Kotlin", "Java", "JavaScript"],
          },
          {
            title: "Tools",
            data: ["Kotlin", "Java"],
          },
        ],
    },
    { title: t("Ides"), icon: IDEs, data: [
          "JetBrains Tools: IDEA & WebStorm & Fleet & DataGrip & RustRover & DataSpell & PyCharm & CLion",
          "Android Studio",
          "Visual Studio Code",
          "Eclipse",
          "Figma",
          "Xcode",
          "RAD Studio",
          "Visual Studio",
        ], },
    { title: t("Version"), icon: version,  data: ["Git: GitHub & GitLab", "Subversion"], },
    { title: t("Backend"), icon: backend,  data: [
          {
            title: "Platforms / Runtimes",
            data: [
              " Kotlin & Java (JVM) + GraalVM (Native/Java AOT)",
              "Node (JavaScript)",
              "Deno (TypeScript)",
              "Wasmer (WASM)",
            ],
          },
          {
            title: "Cloud Services (SaaS + PaaS)",
            data: [
              "Amazon Web Services (AWS)",
              "Digital Ocean",
              "Oracle OCI",
              "Google Cloud",
              "Microsoft Azure",
            ],
          },
          {
            title: "Protocols",
            data: [
              "REST & OpenAPI/Swagger",
              "GraphQL & Graphiql & GraphQL Kotlin",
              "WebSockets",
              "Server-Sent Events (SSE) ",
            ],
          },
          {
            title: "Frameworks",
            data: [
              "Ktor (Kotlin/JVM, GraalVM) & Exposed (Kotlin SQL)",
              "Spring Boot (JVM, GraalVM)",
              "Micronaut (JVM, GraalVM)",
              "Nuxt (Node/Vue)",
              "NextJS (Node/React)",
              "NestJS (Node)",
              "HTMX",
              "Tokio (Rust)",
            ],
          },
        ], },
    { title: t("Databases"), icon: database, data: [
          {
            title: "Databases - SQL",
            data: [
              "PostgreSQL",
              "Oracle",
              "MySQL",
              "Informix",
              "SQLite",
              "Timescale",
              "Supabase",
            ],
          },
          {
            title: "Databases - NoSQL",
            data: [
              "Datomic & Datalog",
              "Firebase",
              "Cassandra",
              "MongoDB",
              "Redis",
            ],
          },
        ], },
    { title: t("Frontend"), icon: frontend, data: [
          "Vue & Quasar (Vue) & Nuxt (Vue)",
          "React & Next.js (React)",
          "HTMX",
          "Angular",
          "NestJS (Node)",
        ], },
    { title: t("Mobile"), icon: mobile, data: [
          {
            title: "Android Native",
            data: ["Android Studio", "Kotlin"],
          },
          {
            title: "iOS Native",
            data: ["Xcode", "Swift"],
          },
          {
            title: "Cross-Platform Frameworks - Hybrid",
            data: ["Kotlin Multiplatform (KMM)", "Capacitor", "Cordova", "Ionic"],
          },
        ], },
    { title: t("DevOps"), icon: devops, data: [
          {
            title: "Platforms & Cloud Native Runtimes",
            data: [
              {
                title: "Linux metal & VMs",
                data: [
                  "Ubuntu",
                  "Windows Subsystem for Linux (WSL2)",
                  "Alpine",
                  "SUSE Linux Enterprise Server (SLES)",
                ],
              },
              {
                title: "Podman",
                data: [],
              },
              {
                title: "Docker",
                data: ["Docker Compose","Docker Desktop","Amazon Elastic Container Service (ECS) & Amazon Elastic Container Registry (ECR)","Google Cloud Run & Google Container Registry (GCR)","Azure Container Instances (ACI) & Azure Container Registry (ACR)","Oracle Cloud Infrastructure Registry (OCIR)","DigitalOcean App Platform & DigitalOcean Container Registry (DOCR)",
                ],
              },
              {
                title: "Kubernetes",
                data: [
                  "MicroK8s","K3s","Amazon Elastic Kubernetes Service (EKS)","Google Google Kubernetes Engine (GKE)","Azure Kubernetes Service (ACS)","Oracle Kubernetes Engine (OKE))","DigitalOcean Kubernetes",
                ],
              },
            ],
          },
          {
            title: "Platforms & Cloud Native Runtimes",
            data: ["Jenkins","GitLab CI/CD Pipelines","GitHub Actions","Helm","Istio","Argo CD",],
          },
          {
            title: "Infrastructure as Code (IaC)",
            data: ["GitOps","Terraform","Terragrunt, XML","Ansible"],
          },
          
        ], },
    { title: t("Desktop"), icon: desktop,data: [
          {
            title: "GUI",
            data: ["Jetpack Compose Desktop (JVM/Kotlin)","JavaFX (JVM/Kotlin & Java)","Electron (Node/TypeScript)","Eclipse SWT & Eclipse RCP","Swing (JVM/Kotlin & Java)","Delphi VCL & FMX","Tauri (Rust/Web)","Windows Presentation Foundation (.NET/WPF)",],
          },
          {
            title: "CLI",
            data: ["Xcode", "Swift"],
          }
        ], },
    { title: t("dataSience"), icon: datasience, data: [
          {
            title: "Kotlin",
            data: ["Kotlin for Data Science","Kotlin Notebook","DataFrame","Lets-Plot Kotlin","Kandy",],
          },
          {
            title: "Python",
            data: ["Python for Data Science","Jupyter","TensorFlow","PyTorch","Pandas","Plotly","Kaggle",],
          }
        ], },
    { title: t("Iot"), icon: Iot,data: [
          {
            title: "Languages",
            data: ["C & C++","Rust","WebAssembly",],
          },
          {
            title: "Platforms",
            data: ["Nordic Semi nRF52840 & nRF9160","Raspberry Pi","Arduino","ESP32",],
          },
          {
            title: "Protocols",
            data: ["BLE","NB-IoT","LTE-M","LoRaWAN","MQTT",],
          }
        ],},
    { title: t("Observability"), icon: Observability,  data: ["OpenTelemetry","Prometheus","Grafana","Micrometer",],},
    { title: t("TestAutomation"), icon: test, data: [
          {
            title: "Frameworks",
            data: ["Selenium","WebDriver","WebDriverIO","Appium","Cypress","Playwright","TestCafe",],
          },
          {
            title: "RPA",
            data: ["UiPath","Power Automate",],
          }
        ], },
    { title: t("BuildTools"), icon: build, data: ["Gradle (JVM)","Maven (JVM)","Vite (Node)","Gulp (Node)","Webpack (Node)","Rollup (Node)","Rolldown (Node)","cargo (Rust)",], },
    { title: t("Networking"), icon: network, data: [
          {
            title: "Protocols",
            data: ["SSH","WireGuard & NetMaker","OpenVPN","HTTP/2","gRPC",],
          },
          {
            title: "Realtime Protocols",
            data: ["WebSockets","WebRTC","MQTT","RabbitMQ","Socket.IO",],
          },
          {
            title: "Tools",
            data: ["ngrok","Postman","Wireshark","Let's Encrypt (SSL)",],
          }
        ], },
    { title: t("PackageManagement"), icon: packageicon,  data: [
          {
            title: "Package Managers",
            data: ["Maven (JVM)","pnpm (Node)","yarn (Node)","npm (Node)","Scoop (Windows)","Homebrew (Linux & MacOS)","Node Version Manager: (nvm/Linux) & nvm/Windows","cargo (Rust)","pip (Python)",],
          },
          {
            title: "Repositories & Registries",
            data: ["Sonatype Nexus Repository","GitLab Package Registry","GitHub Packages","JFrog Artifactory","AWS CodeArtifact","Google Artifact Registry","Azure Artifacts","Oracle Cloud Infrastructure Registry",],
          }
        ], },
  ];
    const renderNestedList = (item, key) => {
      if (typeof item === "object" && item.title && Array.isArray(item.data)) {
        return (
          <li key={key} className="list-none">
            <strong>{item.title}</strong>
            <ul className="list-square pl-5">
              {item.data.map((subItem, subIdx) =>
                renderNestedList(subItem, subIdx)
              )}
            </ul>
          </li>
        );
      }
      return <li key={key}>{item}</li>;
    };
    return (
      <section className="technologys">
        <div className="container">
          <h2>EAS Technology Mapp</h2>
          <div>
            <ul className="list-disc pl-5 tech-wrapper">
              {allData.map((category, index) => (
                <li key={index} className="list-none">
                  <h3 className="flex items-center gap-2">
                    <img src={category.icon?.src}   />
                    <strong>{category.title}</strong>
                  </h3>
                  {Array.isArray(category.data) && (
                    <ul className="list-disc pl-5">
                      {category.data.map((item, idx) =>
                        renderNestedList(item, idx)
                      )}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  };

  export default Technologys;
