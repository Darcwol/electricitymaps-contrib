import EstimationBadge from 'components/EstimationBadge';
import { useTranslation } from 'react-i18next';
import { TimeAverages } from 'utils/constants';
import { formatDate } from 'utils/formatting';

interface AreaGraphToolTipHeaderProps {
  squareColor: string;
  datetime: Date;
  timeAverage: TimeAverages;
  title: string;
  hasEstimationPill?: boolean;
  estimatedPercentage?: number;
}

export default function AreaGraphToolTipHeader(props: AreaGraphToolTipHeaderProps) {
  const {
    squareColor,
    datetime,
    timeAverage,
    title,
    hasEstimationPill = false,
    estimatedPercentage,
  } = props;
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="mb-2 flex justify-between">
        <div className="inline-flex items-center gap-x-1 font-bold">
          <div
            style={{
              backgroundColor: squareColor,
              height: 16,
              width: 16,
            }}
            className="rounded-sm  font-bold"
          ></div>
          <p className="px-1 text-base">{title}</p>
        </div>
        <div className="inline-flex items-center gap-x-2">
          {hasEstimationPill && estimatedPercentage !== 0 && (
            <EstimationBadge
              text={
                estimatedPercentage
                  ? t('estimation-card.aggregated_estimated.pill', {
                      percentage: estimatedPercentage,
                    })
                  : t('estimation-badge.fully-estimated')
              }
            />
          )}
          <div className="my-1 h-[32px] max-w-[165px] select-none whitespace-nowrap rounded-full bg-brand-green/10 px-3 py-2 text-sm text-brand-green dark:bg-gray-700 dark:text-white">
            {formatDate(datetime, i18n.language, timeAverage)}
          </div>
        </div>
      </div>
      <hr className="my-1 mb-3 dark:border-gray-600" />
    </>
  );
}
