CREATE TABLE IF NOT EXISTS gate_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ts TEXT NOT NULL,              -- ISO timestamp (UTC)
  day TEXT NOT NULL,            -- YYYY-MM-DD (UTC)
  gate TEXT NOT NULL,           -- 'masterplan' | 'biblioteca' | 'estilos' | ...
  key_used TEXT NOT NULL,       -- clave que abrió el gate
  path TEXT,                    -- ruta donde ocurrió
  lang TEXT,                    -- es | en
  country TEXT,                 -- cf-ipcountry
  referrer TEXT,
  ua TEXT
);
CREATE INDEX IF NOT EXISTS idx_gate_events_day ON gate_events(day);
CREATE INDEX IF NOT EXISTS idx_gate_events_gate ON gate_events(gate);
CREATE INDEX IF NOT EXISTS idx_gate_events_key ON gate_events(key_used);
