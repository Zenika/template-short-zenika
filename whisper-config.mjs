import path from 'node:path';

// Where to install Whisper.cpp to
export const WHISPER_PATH = path.join(process.cwd(), 'whisper.cpp');

// The version of Whisper.cpp to install
export const WHISPER_VERSION = '1.5.4';

// Which model to use.
// | Model      | Disk   | Mem      |
// |------------|--------|----------|
// | tiny       | 75 MB  | ~390 MB  |
// | tiny.en    | 75 MB  | ~390 MB  |
// | base       | 142 MB | ~500 MB  |
// | base.en    | 142 MB | ~500 MB  |
// | small      | 466 MB | ~1.0 GB  |
// | small.en   | 466 MB | ~1.0 GB  |
// | medium     | 1.5 GB | ~2.6 GB  |
// | medium.en  | 1.5 GB | ~2.6 GB  |
// | large-v1   | 2.9 GB | ~4.7 GB  |
// | large-v2   | 2.9 GB | ~4.7 GB  |
// | large      | 2.9 GB | ~4.7 GB  |

/**
 * @type {import('@remotion/install-whisper-cpp').WhisperModel}
 */
export const WHISPER_MODEL = 'medium';
