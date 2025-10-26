## 🎬 Scene Spotter
Find Your Favorite Anime Scenes in Real Life

애니메이션과 드라마의 실제 배경지를 발견하고 공유하는 성지순례 플랫폼입니다.

##✨ Features
🗺️ 지도 기반 탐색: 작품별 실제 촬영 장소 지도 표시

🔍 스마트 검색: 작품명으로 관련 장소 빠르게 찾기

📍 3단계 인터랙션:

Hover: 간단 정보 툴팁

Click: 상세 정보 모달

Community: 리뷰 & 사진 공유

🎌 일본 특화: 일본 현지 정보 최적화

💫 실용 정보: 교통, 영업시간, 방문 팁

##🛠️ Tech Stack
Framework: Next.js 14 (App Router)

Language: TypeScript

Styling: Panda CSS

State: Zustand

Map: Google Maps API

Data: TanStack Query

Linting: ESLint + Prettier

##🚀 Quick Start
bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
📁 Project Structure
text
scene-spotter/
├── app/                 # Next.js App Router
├── src/
│   ├── components/      # React components
│   ├── stores/         # Zustand state
│   ├── types/          # TypeScript definitions
│   └── lib/            # Utilities
├── public/             # Static assets
└── styled-system/      # Panda CSS generated
🎯 Development
bash
# Code formatting
pnpm format

# Linting
pnpm lint

# Type checking
pnpm type-check
📝 License
MIT License
