// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

/**
 * API Extractor helps you build better TypeScript library packages.
 * It helps with validation, documentation, and reviewing of the exported API
 * for a TypeScript library.
 *
 * @packageDocumentation
 */

export { CompilerState, ICompilerStateCreateOptions } from './api/CompilerState';

export {
  Extractor,
  IExtractorInvokeOptions,
  ExtractorResult
} from './api/Extractor';

export {
  IExtractorConfigPrepareOptions,
  ExtractorConfig
} from './api/ExtractorConfig';

export {
  ExtractorMessage,
  IExtractorMessageProperties,
  ExtractorMessageCategory
} from './api/ExtractorMessage';

export { ExtractorMessageId } from './api/ExtractorMessageId';

export {
  IConfigCompiler,
  IConfigApiReport,
  IConfigDocModel,
  IConfigDtsRollup,
  IConfigTsdocMetadata,
  ExtractorMessageLogLevel,
  IConfigMessageReportingRule,
  IConfigMessageReportingTable,
  IExtractorMessagesConfig,
  IConfigFile
} from './api/IConfigFile';

export { ILogger } from './api/ILogger';
