import { NextRequest, NextResponse } from 'next/server';
import { getCategoryById, Level } from '@/data';
import { generatePdf } from '@/lib/pdf';

const validLevels: Level[] = ['A1', 'A2', 'B1'];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const flokkur = searchParams.get('flokkur');
  const stig = searchParams.get('stig') as Level | null;

  if (!flokkur || !stig) {
    return NextResponse.json(
      { error: 'Vantar flokkur eða stig parameter' },
      { status: 400 }
    );
  }

  if (!validLevels.includes(stig)) {
    return NextResponse.json(
      { error: 'Ógilt stig. Notaðu A1, A2, eða B1.' },
      { status: 400 }
    );
  }

  const category = getCategoryById(flokkur);
  if (!category) {
    return NextResponse.json(
      { error: 'Flokkur fannst ekki' },
      { status: 404 }
    );
  }

  try {
    const pdfBuffer = await generatePdf(category, stig);
    const filename = `${category.id}-${stig}-spjald.pdf`;

    return new NextResponse(new Uint8Array(pdfBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json(
      { error: 'Villa við að búa til PDF' },
      { status: 500 }
    );
  }
}
