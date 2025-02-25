import React from 'react'

const Loading = ({ cardCount = 8, cardType = 'mixed', layout = 'grid' }) => {
	const getLayoutClass = () => {
		switch (layout) {
			case 'grid':
				return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
			case 'flex':
				return 'flex flex-wrap gap-4'
			case 'list':
				return 'flex flex-col gap-4'
			default:
				return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
		}
	}

	const renderSkeleton = () => {
		const skeletons = []

		for (let i = 0; i < cardCount; i++) {
			skeletons.push(
				<div className='container w-[90%] mx-auto py-10 px-2'>
					<div
						key={i}
						className='bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm'
						role='status'
						aria-label='Loading content'
					>
						{(cardType === 'image' || cardType === 'mixed') && (
							<div className='animate-pulse bg-gray-200 dark:bg-gray-700 h-48 w-full relative overflow-hidden'>
								<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-gray-600/20 to-transparent skeleton-shimmer'></div>
							</div>
						)}

						<div className='p-4 space-y-3'>
							<div className='animate-pulse space-y-3'>
								<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4'></div>
								{(cardType === 'text' ||
									cardType === 'mixed') && (
									<>
										<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-full'></div>
										<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6'></div>
									</>
								)}
							</div>

							<div className='animate-pulse flex items-center space-x-3 pt-4'>
								<div className='rounded-full bg-gray-200 dark:bg-gray-700 h-10 w-10'></div>
								<div className='space-y-2 flex-1'>
									<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4'></div>
									<div className='h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}

		return skeletons
	}

	return (
		<div className={getLayoutClass()}>
			{renderSkeleton()}
			<style jsx>{`
				@keyframes shimmer {
					0% {
						transform: translateX(-100%);
					}
					100% {
						transform: translateX(100%);
					}
				}
				.skeleton-shimmer {
					animation: shimmer 2s infinite linear;
				}
			`}</style>
		</div>
	)
}

export default React.memo(Loading)
