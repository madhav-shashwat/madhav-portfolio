import type { Project } from '../types'

const projects: Project[] = [
  {
    id: 'p1',
    title: 'High-Power Audio Amplifier Board',
    description:
      'High-fidelity dual-channel stereo amplifier designed for premium sound reinforcement. Features complementary 2SC5200 & 2SA1943 output transistors, 6800µF / 80V filtering capacitors with a heavy-duty bridge rectifier, and linear component alignment for perfect heatsink attachment.',
    tools: ['Altium Designer'],
    complexity: 'advanced',
    images: [{ thumb: '/high-power-audio-amplifier-pcb.png', render3d: '' }],
  },

  {
    id: 'p2',
    title: 'Double-Sided High-Density Industrial Driver',
    description:
      'Compact, high-density double-layer industrial-grade PCB optimized for automated manufacturing and high reliability. Board size 169.54 mm × 81.03 mm on FR-4 (1.60 mm) with 35 micron copper, HAL finish, blue solder mask, and sharp white silkscreen.',
    tools: ['Altium Designer'],
    complexity: 'advanced',
    images: [
      {
        thumb: '/industrial-driver-ctpcb-561-top.png',
        render3d: '/industrial-driver-ctpcb-561-specs.png',
      },
    ],
  },

  {
    id: 'p3',
    title: 'Multi-Rail Power Supply & Distribution Board',
    description:
      'Rugged industrial power board (Rev-0.0) engineered for structured power distribution across modular racks. Delivers stable +5V, +12V, and +24V DC outputs with diagnostic LEDs, heavy-duty bottom-layer copper pours to minimize voltage drop, and a 64-pin DIN/Eurocard-style edge connector for sub-rack integration.',
    tools: ['Altium Designer'],
    complexity: 'advanced',
    images: [
      {
        thumb: '/multi-rail-power-board-layout.png',
        render3d: '/multi-rail-power-board-3d.png',
      },
    ],
  },

  {
    id: 'p4',
    title: 'Aquai V1.0 — ESP32 Smart IoT Relay Controller',
    description:
      'IoT-connected smart automation controller for high-voltage industrial loads. Built around the ESP32-WROOM module (Wi-Fi/Bluetooth) with 6 heavy-duty electromagnetic relays, flyback protective diodes, and onboard pluggable terminal blocks for quick sensor interfacing.',
    tools: ['Altium Designer'],
    complexity: 'advanced',
    images: [
      {
        thumb: '/aquai-v1-iot-relay-layout.png',
        render3d: '/aquai-v1-iot-relay-3d.png',
      },
    ],
  },

  {
    id: 'p5',
    title: 'Custom Embedded Controller Board',
    description:
      'Compact embedded control hardware for localized communication and peripheral tracking. Highly integrated black-soldermask PCB with CN1/CN2 RJ45/Ethernet-style communication ports, dual LED indicators, and a central microcontroller hub with precise crystal oscillators and filtering capacitors.',
    tools: ['Altium Designer'],
    complexity: 'intermediate',
    images: [
      {
        thumb: '/embedded-controller-board-layout.png',
        render3d: '/embedded-controller-board-3d.png',
      },
    ],
  },

  {
    id: 'p6',
    title: 'Multi-Axis CNC & Motor Driver Shield',
    description:
      'Industrial-grade controller board for multi-axis movement tracking and CNC operations. Integrated 3-axis (X, Y, Z) motor terminal logic with limit-sensor headers, robust buck-regulation supporting stable +19V/PWR inputs, and pot-tuned motor drivers with bulk capacitors for peak current damping.',
    tools: ['Altium Designer'],
    complexity: 'advanced',
    images: [{ thumb: '/cnc-motor-driver-shield.png', render3d: '' }],
  },

  {
    id: 'p7',
    title: 'Microbit Smart Robot Car',
    description:
      '2-layer control board featuring motor drivers, sensor interfaces, and Microbit integration. Designed for stable operation with proper power routing and noise isolation.',
    tools: ['Altium Designer'],
    complexity: 'intermediate',
    images: [{ thumb: '', render3d: '' }],
  },

  {
    id: 'p8',
    title: 'Audio Amplifier Driver Board',
    description:
      'Power-efficient amplifier driver PCB with optimized grounding, reduced noise coupling, and thermal-aware routing for clear audio output.',
    tools: ['Altium Designer'],
    complexity: 'intermediate',
    images: [{ thumb: '/audio-amplifier-driver.jpeg', render3d: '/audio-amplifier-driver-3d.jpeg' }],
  },

  {
    id: 'p9',
    title: 'High-Power Audio Amplifier PCB',
    description:
      '2-layer amplifier board designed for stable high-current operation with careful trace sizing, plane distribution, and EMI-conscious layout.',
    tools: ['Altium Designer'],
    complexity: 'simple',
    images: [{ thumb: '/high-power-audio-amplifier-pcb-old.jpeg', render3d: '/high-power-audio-amplifier-pcb-old-3d.jpeg' }],
  },

  {
    id: 'p10',
    title: 'AC & DC Controller Board',
    description:
      'Control PCB for AC/DC applications with isolation-aware routing, power-path optimization, and robust safety spacing for reliable field performance.',
    tools: ['Altium Designer'],
    complexity: 'advanced',
    images: [{ thumb: '/microbit-smart-robot-car.png', render3d: '' }],
  },

  {
    id: 'p11',
    title: 'Smart WiFi Bulb Load PCB (MCPCB)',
    description:
      'Thermal-optimized MCPCB board designed for WiFi-enabled bulbs with efficient LED driving and EMI-minimized high-voltage routing.',
    tools: ['Altium Designer'],
    complexity: 'intermediate',
    images: [{ thumb: '/smart-wifi-bulb-load-pcb-mcpcb.jpeg', render3d: '' }],
  },

  {
    id: 'p12',
    title: 'DOB LED Panel PCB',
    description:
      'Driver-on-board (DOB) LED panel PCB with precise current paths, isolated sections, and optimized thermal management for long lifetime.',
    tools: ['Altium Designer'],
    complexity: 'intermediate',
    images: [{ thumb: '/dobj-led-panel-pcb.jpeg', render3d: '' }],
  },

  {
    id: 'p13',
    title: 'Smart WiFi 3CCT & RGB Panel Load (MCPCB)',
    description:
      'MCPCB designed for 3CCT & RGB control with RF-friendly layout, strong thermal performance, and dedicated power paths for LED segments.',
    tools: ['Altium Designer'],
    complexity: 'advanced',
    images: [{ thumb: '', render3d: '' }],
  },

  {
    id: 'p14',
    title: 'Smart WiFi Batten PCB',
    description:
      '2-layer batten PCB for smart lighting with load control, EMI-optimized routing, and integrated driver circuitry.',
    tools: ['Altium Designer'],
    complexity: 'intermediate',
    images: [{ thumb: '/smart-wifi-batten-pcb.jpeg', render3d: '' }],
  },

  {
    id: 'p15',
    title: 'Smart Bluetooth Bulb PCB',
    description:
      'Bluetooth-based lighting board with RF-aware routing, noise isolation and stable LED driver integration for flicker-free performance.',
    tools: ['Altium Designer'],
    complexity: 'intermediate',
    images: [{ thumb: '/smart-bluetooth-bulb-pcb.jpeg', render3d: '' }],
  },

  {
    id: 'p16',
    title: 'Smart WiFi Bulb Driver Board',
    description:
      'High-voltage LED driver board with DFM-optimized layout, stable current regulation and robust isolation for safety and efficiency.',
    tools: ['Altium Designer'],
    complexity: 'advanced',
    images: [{ thumb: '/smart-wifi-bulb-driver-board.png', render3d: '' }],
  },

  {
    id: 'p17',
    title: 'Smart WiFi Plug',
    description:
      'Compact PCB for WiFi-enabled plug with power measurement support, relay drive circuitry, and EMI-conscious routing.',
    tools: ['Altium Designer'],
    complexity: 'intermediate',
    images: [{ thumb: '/smart-wifi-plug.jpeg', render3d: '/smart-wifi-plug-3d.jpeg' }],
  },

  {
    id: 'p18',
    title: 'Smart WiFi 3CCT & RGB Panel Controller',
    description:
      '4-layer smart lighting controller optimized for RF performance, power handling and thermal balance for long-term reliability.',
    tools: ['Altium Designer'],
    complexity: 'advanced',
    images: [{ thumb: '/smart-wifi-3cct-rgb-panel-load.jpeg', render3d: '' }],
  },
]

export default projects
