import { ImageResponse } from "next/og";

export const alt = "Wemerson Portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  const logoUrl = "https://portfolio-wmsalves.vercel.app/favicons/Logo.png";

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background:
          "radial-gradient(circle at top left, rgba(56, 189, 248, 0.22), transparent 34%), radial-gradient(circle at 85% 18%, rgba(14, 165, 233, 0.18), transparent 28%), linear-gradient(135deg, #07111f 0%, #0a1425 48%, #101c30 100%)",
        color: "#f8fbff",
        padding: "56px",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "24px",
          border: "1px solid rgba(125, 211, 252, 0.14)",
          borderRadius: "32px",
          display: "flex",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                background: "rgba(15, 23, 42, 0.18)",
                border: "1px solid rgba(125, 211, 252, 0.32)",
              }}
            >
              <img
                src={logoUrl}
                alt="Wemerson logo"
                width="72"
                height="72"
                style={{
                  width: "72px",
                  height: "72px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "rgba(226, 232, 240, 0.72)",
                }}
              >
                Wemerson Portfolio
              </div>
              <div
                style={{
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "#38bdf8",
                }}
              >
                Full-stack Developer
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 20px",
              borderRadius: "999px",
              border: "1px solid rgba(125, 211, 252, 0.22)",
              color: "rgba(226, 232, 240, 0.9)",
              fontSize: "20px",
            }}
          >
            Belo Horizonte, Brazil
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "860px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "86px",
              lineHeight: 0.95,
              fontWeight: 800,
              letterSpacing: "-0.06em",
            }}
          >
            Building thoughtful digital products with a systems mindset.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "31px",
              lineHeight: 1.35,
              color: "rgba(226, 232, 240, 0.78)",
              maxWidth: "820px",
            }}
          >
            Performance-first interfaces, type-safe architecture, and a personal
            portfolio built with craft.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "14px",
            }}
          >
            {["React", "TypeScript", "Next.js", "UX/UI"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  padding: "12px 18px",
                  borderRadius: "999px",
                  border: "1px solid rgba(125, 211, 252, 0.18)",
                  color: "rgba(248, 250, 252, 0.92)",
                  fontSize: "22px",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "26px",
              color: "rgba(226, 232, 240, 0.72)",
            }}
          >
            portfolio-wmsalves.vercel.app
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
