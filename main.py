import matplotlib.pyplot as plt
import numpy as np

from skimage.segmentation import felzenszwalb, slic, quickshift
from skimage.segmentation import mark_boundaries
from skimage import io


def seg_slic(img, imgname, ax, i):
    segments_slic = slic(img, n_segments=250, compactness=10, sigma=1, start_label=1)
    print(f"SLIC number of segments: {len(np.unique(segments_slic))}")

    ax[i].imshow(mark_boundaries(img, segments_slic))
    ax[i].set_title('SLIC')

    io.imsave(imgname, mark_boundaries(img, segments_slic))


def seg_quick(img, imgname, ax, i):
    segments_quick = quickshift(img, kernel_size=3, max_dist=6, ratio=0.5)
    print(f"QuickShift number of segments: {len(np.unique(segments_quick))}")

    ax[i].imshow(mark_boundaries(img, segments_quick))
    ax[i].set_title('QuickShift')

    io.imsave(imgname, mark_boundaries(img, segments_quick))


def seg_fz(img, imgname, ax, i):
    segments_fz = felzenszwalb(img, scale=100, sigma=0.5, min_size=50)
    print(f"Felzenszwalb number of segments: {len(np.unique(segments_fz))}")

    ax[i].imshow(mark_boundaries(img, segments_fz))
    ax[i].set_title("Felzenszwalb")

    io.imsave(imgname, mark_boundaries(img, segments_fz))


if __name__ == '__main__':
    img = io.imread('./test5.jpg')
    fig, ax = plt.subplots(1, 2)

    seg_slic(img, 'slic1.jpg', ax, 0)
    seg_quick(img, 'quick1.jpg', ax, 1)
    # seg_fz(img, 'fz1.jpg', ax, 2)

    for a in ax.ravel():
        a.set_axis_off()

    plt.tight_layout()
    plt.show()
