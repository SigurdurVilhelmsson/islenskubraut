import ReactPDF, {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import { Category, Level } from '@/data/types';
import React from 'react';

// Register a font that supports Icelandic characters
Font.register({
  family: 'NotoSans',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@fontsource/noto-sans@5.0.0/files/noto-sans-latin-ext-400-normal.woff',
      fontWeight: 'normal',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/@fontsource/noto-sans@5.0.0/files/noto-sans-latin-ext-700-normal.woff',
      fontWeight: 'bold',
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'NotoSans',
    padding: 30,
    backgroundColor: '#FFFFFF',
  },
  // Front page styles
  frontHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  frontHeaderText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  levelBadge: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  levelBadgeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  subCategoryBox: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 6,
    overflow: 'hidden',
  },
  subCategoryHeader: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  subCategoryHeaderText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  subCategoryBody: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  optionTag: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
    marginRight: 4,
    marginBottom: 4,
  },
  optionText: {
    fontSize: 10,
  },
  // Back page styles
  backHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 30,
  },
  sentenceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 24,
  },
  frameBox: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
    alignItems: 'center',
  },
  frameText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  exampleBox: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 14,
    marginTop: 24,
  },
  exampleLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#6B7280',
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  exampleText: {
    fontSize: 12,
    color: '#374151',
    fontStyle: 'italic',
  },
  teacherBox: {
    backgroundColor: '#FFFBEB',
    borderWidth: 1,
    borderColor: '#FDE68A',
    borderRadius: 6,
    padding: 10,
    marginTop: 16,
  },
  teacherText: {
    fontSize: 9,
    color: '#92400E',
  },
  teacherBold: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#92400E',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 8,
    color: '#9CA3AF',
  },
});

function getExample(categoryId: string, level: Level): string {
  const examples: Record<string, Record<Level, string>> = {
    dyr: {
      A1: 'Þetta er dýr. Það er stórt. Það hefur feld.',
      A2: 'Þetta er dýr sem býr í vatni. Það hefur hreistur og syndir. Það étur plöntur.',
      B1: 'Ég held að þetta sé delfínn vegna þess að hann syndir og býr í sjónum. Þetta dýr er grátt og snjallt. Það er líkt hval en ólíkt fisk.',
    },
    matur: {
      A1: 'Þetta er ávöxtur. Það er sætt. Maður borðar það í morgunmat.',
      A2: 'Þetta er grænmeti sem er grænt. Maður borðar það hrátt. Það er hollt.',
      B1: 'Þetta er ávöxtur sem bragðast sætt og súrt. Það er oft borðað sem millimál. Mér finnst það mjög gott.',
    },
    farartaeki: {
      A1: 'Þetta er bíll. Það fer á landi. Það er stórt.',
      A2: 'Þetta er skip sem fer á sjó. Það hefur ekki hjól og er stórt.',
      B1: 'Þetta farartæki er flugvél sem er notað til að ferðast langar leiðir. Það getur flutt marga og fer í lofti.',
    },
    manneskja: {
      A1: 'Þetta er kennari. Hún er ung. Hún les.',
      A2: 'Þetta er kona sem er há. Hún er ung og mynduleg. Hún vinnur sem læknir.',
      B1: 'Ég held að þetta sé söngvari vegna þess að hún er fræg og syngur. Þessi manneskja er ung og er þekkt fyrir tónlist.',
    },
    stadir: {
      A1: 'Þetta er skóli. Maður lærir þar.',
      A2: 'Þetta er sundlaug sem er í bænum. Maður fer þangað til að synda.',
      B1: 'Þetta er safn sem er staðsett í borginni. Fólk fer þangað til að læra og skoða list.',
    },
    klaednadur: {
      A1: 'Þetta er úlpa. Það er blátt.',
      A2: 'Þetta er peysa sem er rauð. Maður klæðist því á veturna.',
      B1: 'Þetta er jakki úr leðri sem maður notar á veturna. Það er svart og hentar vel í kulda.',
    },
  };
  return examples[categoryId]?.[level] || '';
}

function getTeacherNote(level: Level): string {
  const notes: Record<Level, string> = {
    A1: 'Nemandi bendir á orð af spjaldinu og myndar einfaldar setningar. Hjálpið nemandanum að velja rétt orð og segja heila setningu.',
    A2: 'Nemandi tengir saman tvær eða þrjár setningar. Hvetjið nemandann til að nota mismunandi orð úr undirflokkunum.',
    B1: 'Nemandi notar setningaramma sem grunn en bætir við eigin hugmyndum. Hvetjið til samanburðar og rökstuðnings.',
  };
  return notes[level];
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

export function createSpjaldDocument(category: Category, level: Level) {
  const sentenceFrame = category.sentenceFrames.find((sf) => sf.level === level);
  const rgb = hexToRgb(category.color);
  const lightBg = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.05)`;
  const borderColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.25)`;
  const headerBgFaded = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8)`;

  return React.createElement(
    Document,
    null,
    // Front page - vocabulary
    React.createElement(
      Page,
      { size: 'A4', style: styles.page },
      React.createElement(
        View,
        { style: { ...styles.frontHeader, backgroundColor: category.color } },
        React.createElement(
          Text,
          { style: styles.frontHeaderText },
          `${category.icon}  ${category.name.toUpperCase()}`
        ),
        React.createElement(
          View,
          { style: styles.levelBadge },
          React.createElement(Text, { style: styles.levelBadgeText }, level)
        )
      ),
      ...category.subCategories.map((sub, index) =>
        React.createElement(
          View,
          { key: index, style: styles.subCategoryBox },
          React.createElement(
            View,
            {
              style: {
                ...styles.subCategoryHeader,
                backgroundColor: headerBgFaded,
              },
            },
            React.createElement(
              Text,
              { style: styles.subCategoryHeaderText },
              sub.name
            )
          ),
          React.createElement(
            View,
            { style: styles.subCategoryBody },
            ...sub.options.map((option, optIndex) =>
              React.createElement(
                View,
                {
                  key: optIndex,
                  style: {
                    ...styles.optionTag,
                    borderColor: borderColor,
                    backgroundColor: lightBg,
                  },
                },
                React.createElement(
                  Text,
                  { style: { ...styles.optionText, color: category.color } },
                  option
                )
              )
            )
          )
        )
      ),
      React.createElement(
        Text,
        { style: styles.footer },
        `Íslenskubraut — Kvennaskólinn í Reykjavík — ${category.name} ${level}`
      )
    ),
    // Back page - sentence frames
    React.createElement(
      Page,
      { size: 'A4', style: styles.page },
      React.createElement(
        View,
        { style: { ...styles.backHeader, backgroundColor: category.color } },
        React.createElement(
          Text,
          { style: styles.frontHeaderText },
          `${category.icon}  ${category.name.toUpperCase()}`
        ),
        React.createElement(
          View,
          { style: styles.levelBadge },
          React.createElement(Text, { style: styles.levelBadgeText }, level)
        )
      ),
      React.createElement(Text, { style: styles.sentenceTitle }, 'Setningarammar'),
      ...(sentenceFrame
        ? sentenceFrame.frames.map((frame, index) =>
            React.createElement(
              View,
              {
                key: index,
                style: { ...styles.frameBox, borderColor: borderColor },
              },
              React.createElement(
                Text,
                { style: { ...styles.frameText, color: category.color } },
                frame
              )
            )
          )
        : []),
      React.createElement(
        View,
        { style: styles.exampleBox },
        React.createElement(Text, { style: styles.exampleLabel }, 'Dæmi'),
        React.createElement(
          Text,
          { style: styles.exampleText },
          getExample(category.id, level)
        )
      ),
      React.createElement(
        View,
        { style: styles.teacherBox },
        React.createElement(
          Text,
          { style: styles.teacherBold },
          'Fyrir kennara: '
        ),
        React.createElement(
          Text,
          { style: styles.teacherText },
          getTeacherNote(level)
        )
      ),
      React.createElement(
        Text,
        { style: styles.footer },
        `Íslenskubraut — Kvennaskólinn í Reykjavík — ${category.name} ${level}`
      )
    )
  );
}

export async function generatePdf(
  category: Category,
  level: Level
): Promise<Buffer> {
  const doc = createSpjaldDocument(category, level);
  const pdfStream = await ReactPDF.renderToStream(doc);

  const chunks: Uint8Array[] = [];
  for await (const chunk of pdfStream) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}
